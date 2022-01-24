import React from "react";

import "./NewList.css";

const NewList = () => {
  return (
    <>
        <form action="/api/addtolist" method="POST">
        <div>
            <h3>GENDER</h3>
            <select type="select" name="gender">
            <option value="1">Item 1</option>
            <option value="2">Item 2</option>
            <option value="3">Item 3</option>
            <option value="4">Item 4</option>
            <option value="5">Item 5</option>
            </select>
        </div>

        <div>
            <h3>DURATION</h3>
            <input type="text" value="1" name="nights" />nights
        </div>

        <div>
            <h3>TEMPERATURE (at destination)</h3>
            <input type="text" value="9" name="degrees" />degrees
        </div>

        <div>
            <h3>DOING LAUNDRY?</h3>
            <select type="select" name="laundry">
            <option value="1">Yes</option>
            <option value="0">No</option>
            </select>

            <h3>LUGGAGE PREFERENCE</h3>
            <select type="select" name="luggage">
                <option value="light">Light/minimal</option>
                <option value="regular">Regular</option>
                <option value="comfortable">Comfortable</option>
            </select>
        </div>

        <div>
            <h3>MAIN ACTIVITY(IES)</h3>
            Select at most 2:<br />
            <input type="checkbox" value="skiing" name="activity" />
            Skiing<br />
            <input type="checkbox" value="hiking" name="activity" />
            Hiking<br />
            <input type="checkbox" value="swimming" name="activity" />
            Swimming/beaching<br />
            <input type="checkbox" value="sightseeing" name="activity" />
            Sightseeing/shopping<br />
            <input type="checkbox" value="business" name="activity" />
            Business-related
        </div>

        <div>
            <h3>FORM OF TRAVEL</h3>
            <input type="checkbox" value="business" name="travel" />
            Plane
            <input type="checkbox" value="business" name="travel" />
            Train
            <input type="checkbox" value="business" name="travel" />
            Car
            <input type="checkbox" value="business" name="travel" />
            Boat/cruise
        </div>
        </form>
    </>
  );
};

export default NewList;
