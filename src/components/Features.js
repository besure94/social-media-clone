import React from "react";

function Features(props) {
  return (
    <React.Fragment>
      <input id="search" type="text" placeholder="Search">{props.search}</input>
      <input id="tweet" type="text" placeholder="Tweet">{props.tweet}</input>
    </React.Fragment>
  );
}

export default Features;