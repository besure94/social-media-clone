import React from "react";
import PropTypes from "prop-types";

function Bio(props) {
  return (
    <div className="bio">
      <p>{props.bio}</p>
    </div>
  );
}

Bio.propTypes = {
  bio: PropTypes.string
}

export default Bio;