import { getOwnPropertySymbols } from "core-js/core/object";
import React, { useState } from "react";

const Post = (props) => {
    const [numLikes, setNumLikes] = useState(0);
    return(
        <div className="post">
            <h2>{props.name}</h2>
            <h4>{props.listType} TraveList </h4>
            <button
            onClick={ () => {
                setNumLikes(numLikes + 1);
            }}
            >
                <img src="likeIcon.png" />
                {numLikes}
            </button>
        </div>
    );
};

export default Post;