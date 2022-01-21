import React, { useState, useEffect } from "react";
const Profile = () => {
  useEffect(() => {
    document.title = "Profile Page";
  }, []);

  return (
    <>
      <div className="Profile-avatarContainer">
        <div className="Profile-avatar" />
      </div>
      <h1 className="Profile-name u-textCenter">Shannen Wu</h1>
      <hr className="Profile-line" />
      <div className="u-flex">
        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">About Me</h4>
          <div id="profile-description">
            I am really allergic to cats i don't know why i have a catbook
          </div>
        </div>
        <div className="Profile-subContainer u-textCenter"></div>
      </div>
    </>
  );
};

export default Profile;
