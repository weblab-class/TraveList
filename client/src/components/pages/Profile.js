import React, { useState, useEffect } from "react";
import { get } from "../../utilities";


// import "../../utilities.css";
// import "./Profile.css";

const Profile = (props) => {
  const [posts, setPosts] = useState([]);

  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen

  const [userId, setUserId] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  //const [userPosts, setPosts] = useState([]);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        console.log(user);
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
        setUserName(user.name);
      }
    });
  }, []);

  // useEffect(() => {
  //   document.title = "Profile Page";
  //   get(`/api/account`, { userid: props.userId }).then((userObj) => console.log(userObj));
  // }, []);

  useEffect(() => {
    get("/api/myposts", { user: props._id }).then((posts) => {
      setPosts(posts);
    });
  }, []);

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  // const addNewList = (storyObj) => {
  //   setStories([storyObj].concat(stories));
  // };

  let postsList = null;
  const hasPosts = posts.length !== 0;


  if (hasPosts) {
    postsList = posts.map((postObj) => <p>Post</p>);
  } else {
    postsList = <div>No posts yet!</div>;
  }
  return (
    <>
      {userName}
      <form>
        <label>
          Bio:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Save" />
      </form>
      {postsList}
    </>
  );
};

export default Profile;
