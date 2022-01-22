import React, { useState, useEffect } from "react";
const MyList = () => {
  useEffect(() => {
    document.title = "My List";
  }, []);

  return (
    <>
        <form>
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        </form>
    </>
  );
};

export default MyList;



// var name = window.prompt("Enter your destination: ");
//         var name = window.prompt("Enter your destination: ");

//         const form = document.getElementById('subscribe');
//         <form action="/signup" method="post" id="signup"> 
//         </form>

//         <input type="submit" value="Subscribe"></input>

//         alert("Your name is " + name);
