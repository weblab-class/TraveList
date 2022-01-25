import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

const PackingList = (props) => {
  const listId = props["*"];
  const [list, setLists] = useState([]);

  useEffect(() => {
    get("/api/newlist", { user: props._id }).then((list) => {
      setList(list);
    });
  }, []);

  let listList = null;
  const hasList = list.length !== 0;

  listList = list.map((listObj) => (
    <p>
      Title: {listObj.title}
      Description: {listObj.bio}
    </p>
  ));

  return (
    <>
      <p>hi{listList}</p>
    </>
  );
};

export default PackingList;
