import React, { useState } from "react";

import "./NewList.css";

import { post } from "../../utilities";

const NewList = (props) => {
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");

  const updateName = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const updateDestination = (event) => {
    const value = event.target.value;
    setDestination(value);
  };

  const updateDescription = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //const body = { parent: props.storyId, content: value };

    var formData = new FormData(document.newlist);

    const body = {};

    // var object = {};
    formData.forEach(function (value, key) {
      //     object[key] = value;
      body[key] = value;
    });

    body.title = name;
    body.userId = props.userId;
    body.description = description;
    body.destination = destination; //
    // //var json = JSON.stringify(object);

    post("/api/newlist", body).then((newlist) => {
      window.location = "/list/" + newlist._id;
    });
  };
  return (
    <>
      <form action="/api/alist" method="POST" name="newlist">
        <div className="newlist">
          <h2>TITLE</h2>
          <form>
            <label>
              <input type="text" name="name" value={name} onChange={updateName} />
            </label>
            <input type="submit" value="Save" />
          </form>
        </div>

        <div className="newlist">
          <h2>DESCRIPTION</h2>
          <form>
            <label>
              <input type="text" name="name" value={description} onChange={updateDescription} />
            </label>
            <input type="submit" value="Save" />
          </form>
        </div>

        <div className="newlist">
          <h2>DESTINATION</h2>
          <form>
            <label>
              <input type="text" name="name" value={destination} onChange={updateDestination} />
            </label>
            <input type="submit" value="Save" />
          </form>
        </div>

        <div className="newlist">
          <h3>Gender</h3>
          <select type="select" name="gender">
            <option value="1">Item 1</option>
            <option value="2">Item 2</option>
            <option value="3">Item 3</option>
            <option value="4">Item 4</option>
            <option value="5">Item 5</option>
          </select>
        </div>

        <div className="newlist">
          <h3>Duration</h3>
          <input type="text" defaultValue="1" name="nights" />
          nights
        </div>

        <div className="newlist">
          <h3>Temperature(at destination)</h3>
          <input type="text" value="9" name="degrees" />
          degrees
        </div>

        <div className="newlist">
          <h3>Doing Laundry?</h3>
          <select type="select" name="laundry">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>

          <h3>Luggage preference</h3>
          <select type="select" name="luggage">
            <option value="light">Light/minimal</option>
            <option value="regular">Regular</option>
            <option value="comfortable">Comfortable</option>
          </select>
        </div>

        <div className="newlist">
          <h3>Main activities</h3>
          Select at most 2:
          <br />
          <input type="checkbox" value="skiing" name="activity" />
          Skiing
          <br />
          <input type="checkbox" value="hiking" name="activity" />
          Hiking
          <br />
          <input type="checkbox" value="swimming" name="activity" />
          Swimming/beaching
          <br />
          <input type="checkbox" value="sightseeing" name="activity" />
          Sightseeing/shopping
          <br />
          <input type="checkbox" value="business" name="activity" />
          Business-related
        </div>

        <div className="newlist">
          <h3>Form of travel</h3>
          <input type="checkbox" value="business" name="travel" />
          Plane
          <input type="checkbox" value="business" name="travel" />
          Train
          <input type="checkbox" value="business" name="travel" />
          Car
          <input type="checkbox" value="business" name="travel" />
          Boat/cruise
        </div>

        <div className="newlist">
          <input type="submit" value="Create List" onClick={handleSubmit} />
        </div>
      </form>
    </>
  );
};

export default NewList;
