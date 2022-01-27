// import React, { useState, useEffect } from "react";
// import { get } from "../../utilities";

// import "../../utilities.css";
// import "./Profile.css";

// const Profile = (props) => {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     document.title = "Profile Page";
//     get(`/api/account`, { googleid: props.userId }).then((userObj) => setUser(userObj));
//   }, []);

//   if (!user) {
//     return <div> Loading! </div>;
//   }
//   return (
//     <>
//       <div
//       >
//         <div className="Profile-avatar" />
//       </div>
//       <h1 className="Profile-name u-textCenter">{user.name}</h1>
//       <hr className="Profile-linejj" />
//       <div className="u-flex">
//         <div className="Profile-subContainer u-textCenter">
//           <h4 className="Profile-subTitle">Bio</h4>
//           <div id="profile-description">
//             I am really allergic to cats i don't know why i have a catbook
//           </div>
//         </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

// import "../../utilities.css";
// import "./Profile.css";

const Profile = (props) => {
  const [lists, setLists] = useState([]);
  console.log(props);

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
    get("/api/mylists", { userId: props.userId }).then((lists) => {
      setLists(lists);
    });
  }, []);

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  // const addNewList = (storyObj) => {
  //   setStories([storyObj].concat(stories));
  // };

  let listsList = null;
  const hasLists = lists.length !== 0;

  // const Profile = (props) => {
  //   const [user, setUser] = useState();

  //   console.log(user);
  //   console.log(props);

  //   useEffect(() => {
  //     document.title = "Profile Page";
  //     get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));
  //   }, []);

  //   const incrementCatHappiness = () => {
  //     setCatHappiness(catHappiness + 1);
  //   };

  //   if (!user) {
  //     return <div> Loading! </div>;
  //   }
  //   return (
  //     <>
  //       <div
  //         className="Profile-avatarContainer"
  //         onClick={() => {
  //           incrementCatHappiness();
  //         }}
  //       >
  //         <div className="Profile-avatar" />
  //       </div>
  //       <h1 className="Profile-name u-textCenter">{user.name}</h1>
  //       <hr className="Profile-linejj" />
  //       <div className="u-flex">
  //         <div className="Profile-subContainer u-textCenter">
  //           <h4 className="Profile-subTitle">About Me</h4>
  //           <div id="profile-description">
  //             I am really allergic to cats i don't know why i have a catbook
  //           </div>
  //         </div>
  //         <div className="Profile-subContainer u-textCenter">
  //           <h4 className="Profile-subTitle">Cat Happiness</h4>
  //           <CatHappiness catHappiness={catHappiness} />
  //         </div>
  //         <div className="Profile-subContainer u-textCenter">
  //           <h4 className="Profile-subTitle">My Favorite Type of Cat</h4>
  //           <div id="favorite-cat">corgi</div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  //export default Profile;

  if (hasLists) {
    listsList = lists.map((listObj) => (
      <p>
        <h3>-----</h3>
        <h3>Title: {listObj.title}</h3>
        <h3>Description: {listObj.description}</h3>
        <h3>Destination: {listObj.destination}</h3>
      </p>
    ));
  } else {
    listsList = <div>No lists yet!</div>;
  }
  return (
    <>
      {/* <NewList addNewList={addNewList} /> */}
      <h2>My Lists</h2>
      {userName ? listsList : "Log in to see your lists"}
    </>
  );
};

export default Profile;

// import React, { useState, useEffect } from "react";
// import { get } from "../../utilities";

// // import "../../utilities.css";
// // import "./Profile.css";

// const Profile = (props) => {
//   const [posts, setPosts] = useState([]);

//   // called when the "Feed" component "mounts", i.e.
//   // when it shows up on screen

//   const [userId, setUserId] = useState(undefined);
//   const [userName, setUserName] = useState(undefined);
//   //const [userPosts, setPosts] = useState([]);

//   let postsList = null;
//   const hasPosts = posts.length !== 0;

//   useEffect(() => {
//     get("/api/whoami").then((user) => {
//       if (user._id) {
//         console.log(user);
//         // they are registed in the database, and currently logged in.
//         setUserId(user._id);
//         setUserName(user.name);
//       }
//     });
//   }, []);

//   useEffect(() => {
//     get("/api/myposts", { user: props._id }).then((posts) => {
//       setPosts(posts);
//     });
//   }, []);

//   if (hasPosts) {
//     postsList = posts.map((postObj) => <p>hello{postObj}</p>);
//   } else {
//     postsList = <div>No lists yet!</div>;
//   }
//   return <>{postsList}</>;
// };

// export default Profile;

// // import React, { useState, useEffect } from "react";
// // import { get } from "../../utilities";

// // const MyLists = (props) => {
// //   useEffect(() => {
// //     get("/api/myposts", { user: props._id }).then((posts) => {
// //       setPosts(posts);
// //     });
// //   }, []);

// //   const [posts, setPosts] = useState([]);
// //   let postsList = null;
// //   const hasPosts = posts.length !== 0;

// //   if (hasPosts) {
// //     postsList = posts.map((postObj) => <p>List</p>);
// //   } else {
// //     postsList = <div>No Lists yet!</div>;
// //     return (
// //       <>
// //         {/* <NewList addNewList={addNewList} /> */}
// //         {postsList}
// //       </>
// //     );
// //   }
// // };

// // export default MyLists;

// // import React, { useState, useEffect } from "react";
// // const MyList = () => {
// //   useEffect(() => {
// //     document.title = "My List";
// //   }, []);

// //   return (
// //     <>
// //         <form>
// //         <label>
// //             Name:
// //             <input type="text" name="name" />
// //         </label>
// //         <input type="submit" value="Submit" />
// //         </form>
// //     </>
// //   );
// // };

// // export default MyList;

// // var name = window.prompt("Enter your destination: ");
// //         var name = window.prompt("Enter your destination: ");

// //         const form = document.getElementById('subscribe');
// //         <form action="/signup" method="post" id="signup">
// //         </form>

// //         <input type="submit" value="Subscribe"></input>
