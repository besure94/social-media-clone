import React from "react";
import PropTypes from "prop-types";

function Bio(props) {
  return (
    <React.Fragment>
      <div className="bio">
        <p>{props.bio}</p>
      </div>
    </React.Fragment>
  );
}

Bio.propTypes = {
  bio: PropTypes.string
}

export default Bio;