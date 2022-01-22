import React from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Skeleton from "../pages/Skeleton.js";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <Link to="/" className="NavBar-link">
        <div className="NavBar-title u-inlineBlock">TraveList</div>
      </Link>
      <Link to="/profile" className="NavBar-link">
        My Profile
      </Link>
      <Link to="/mylists" className="NavBar-link">
        My Lists
      </Link>
      <Link to="/newlist" className="NavBar-link">
        New List
      </Link>
    </nav>
  );
};

export default NavBar;
