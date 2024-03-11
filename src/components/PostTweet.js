import React from "react";

function PostTweet(props) {
  return (
    <div className="post-tweet">
      <i className="box">&#xf406;</i>
      <input id="post" type="text" placeholder="What's happening?">{props.post}</input>
    </div>
  );
}

export default PostTweet;
