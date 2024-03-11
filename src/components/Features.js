import React from "react";

function Features(props) {
  return (
    <div>
      <input id="search" type="text" placeholder="Search">{props.search}</input>
      <input id="tweet" type="text" placeholder="Tweet">{props.tweet}</input>
    </div>
  );
}

export default Features;