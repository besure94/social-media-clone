import React from "react";
import PropTypes from "prop-types";

function Bio(props) {
  return (
    <div className="bio">
      <h4>Bio</h4>
      <p>{props.bio}</p>
    </div>
  );
}

Bio.propTypes = {
  bio: PropTypes.string
}

export default Bio;