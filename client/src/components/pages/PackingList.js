import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

const PackingList = (props) => {
  const listId = props.listId;
  const [list, setList] = useState([]);
  console.log(typeof listId);
  useEffect(() => {
    get("/api/list", { id: listId }).then((list) => {
      console.log("made it bakc");
      console.log(list);
      setList(list);
    });
  }, []);

  let listList = null;
  const hasList = list.length !== 0;
  console.log("MARKER");
  console.log(list);
  listList = list.map((listObj) => (
    <p>
      <h2>Title: {listObj.title}</h2>
      <h3>Description: {listObj.description}</h3>
      <h3>Destination: {listObj.destination}</h3>
    </p>
  ));

  console.log(list);

  return (
    <>
      <h2>Packing List </h2>
      {listList}
      <h3> - Suitcases, backpack</h3>
      <h3> - Travel locks, Passport, boarding pass</h3>
      <h3> - Luggage tags</h3>
      <h3> - Pens and paper</h3>
      <h3> - Snacks, drinks</h3>
      <h3> - Small pocket knife (not in carry-on!)</h3>
      <h3> - Rope, expandable clothesline</h3>
      <h3> - Foreign currency</h3>
      <h3> - Emergency money</h3>
      <h3> - Credit card, debit card</h3>
      <h3> - Extra wallet</h3>
      <h3> - Phone, charger, laptop</h3>
      <h3> - Travel pillow, sleeping mask, earplugs</h3>
      <h3> - First Aid Kit</h3>
      <h3> - Fancy clothing, relaxed clothing, bright clothing</h3>
      <h3> - Dresss shoes, sandals, casual shoes</h3>
      <h3> - Winter jacket, Dress jacket, casual jacket</h3>
      <h3> - Hat, Sunglasses, watch</h3>
      <h3> - Gold and silver accesories</h3>
      <h3> - Sunscreen, moisturizer, lotion</h3>
      <h3> - Towel, shower kit, toiletries</h3>
      <h3> - Deodrant, hair wash, hairdryer</h3>
      <h3> - Hiking boots, hiking backpack, water bottle</h3>
      <h3> - Waterproof Ski Jacket, waterproof ski boots, ski leggeings</h3>
      <h3> - VISA</h3>
      <h3> - Portable power saver</h3>


    </>
  );
};

export default PackingList;
