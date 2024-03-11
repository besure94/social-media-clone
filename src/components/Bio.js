import React from "react";

function Bio(props) {
  return (
    <React.Fragment>
      <div className="bio">
        <p>{props.bio}</p>
      </div>
    </React.Fragment>
  );
}

export default Bio;