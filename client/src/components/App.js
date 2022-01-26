import React, { useState, useEffect } from "react";
import NavBar from "./modules/NavBar.js";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import AboutUs from "./pages/AboutUs.js";
import Profile from "./pages/Profile.js";
import MyLists from "./pages/MyLists.js";
import NewList from "./pages/NewList.js";
import PackingList from "./pages/PackingList.js";

import "../utilities.css";
import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };
  console.log("hi " + userId);
  return (
    <>
      <NavBar handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
      <Router>
        <Skeleton path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        <AboutUs path="/aboutus" userId={userId} />
        <Profile path="/profile" userId={userId} />
        <MyLists path="/mylists" userId={userId} />
        <NewList path="/newlist" userId={userId} />
        <PackingList path="/list/:listId" userId={userId} />
        <NotFound default userId={userId} />
      </Router>
    </>
  );
};

export default App;
