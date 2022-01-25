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

  let postsList = null;
  const hasPosts = posts.length !== 0;

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

  useEffect(() => {
    get("/api/myposts", { user: props._id }).then((posts) => {
      setPosts(posts);
    });
  }, []);

  if (hasPosts) {
    postsList = posts.map((postObj) => <p>List</p>);
  } else {
    postsList = <div>No lists yet!</div>;
  }
  return <>{postsList}</>;
};

export default Profile;

import React, { useState, useEffect } from "react";
// import Card from "../modules/Card.js";
import { NewStory } from "../modules/SingleList.js";

import { get } from "../../utilities";

const Feed = (props) => {
  const [stories, setStories] = useState([]);

  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen
  useEffect(() => {
    document.title = "News Feed";
    get("/api/stories").then((storyObjs) => {
      let reversedStoryObjs = storyObjs.reverse();
      setStories(reversedStoryObjs);
    });
  }, []);

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  const addNewStory = (storyObj) => {
    setStories([storyObj].concat(stories));
  };

  let storiesList = null;
  const hasStories = stories.length !== 0;
  if (hasStories) {
    storiesList = stories.map((storyObj) => (
      <Card
        // key={`Card_${storyObj._id}`}
        _id={storyObj._id}
        creator_name={storyObj.creator_name}
        creator_id={storyObj.creator_id}
        userId={props.userId}
        content={storyObj.content}
      />
    ));
  } else {
    storiesList = <div>No stories!</div>;
  }
  return (
    <>
      {props.userId && <NewStory addNewStory={addNewStory} />}
      {storiesList}
    </>
  );
};

export default Feed;



// import React, { useState, useEffect } from "react";
// import { get } from "../../utilities";

// const MyLists = (props) => {
//   useEffect(() => {
//     get("/api/myposts", { user: props._id }).then((posts) => {
//       setPosts(posts);
//     });
//   }, []);

//   const [posts, setPosts] = useState([]);
//   let postsList = null;
//   const hasPosts = posts.length !== 0;

//   if (hasPosts) {
//     postsList = posts.map((postObj) => <p>List</p>);
//   } else {
//     postsList = <div>No Lists yet!</div>;
//     return (
//       <>
//         {/* <NewList addNewList={addNewList} /> */}
//         {postsList}
//       </>
//     );
//   }
// };

// export default MyLists;

// import React, { useState, useEffect } from "react";
// const MyList = () => {
//   useEffect(() => {
//     document.title = "My List";
//   }, []);

//   return (
//     <>
//         <form>
//         <label>
//             Name:
//             <input type="text" name="name" />
//         </label>
//         <input type="submit" value="Submit" />
//         </form>
//     </>
//   );
// };

// export default MyList;

// var name = window.prompt("Enter your destination: ");
//         var name = window.prompt("Enter your destination: ");

//         const form = document.getElementById('subscribe');
//         <form action="/signup" method="post" id="signup">
//         </form>

//         <input type="submit" value="Subscribe"></input>
