import React from "react";

function PostTweet(props) {
  return (
    <div className="post-tweet">
      <input id="post" type="text" placeholder="What's happening?">{props.post}</input>
    </div>
  );
}

export default PostTweet;
