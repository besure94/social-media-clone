import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div className="profile">
      <div className="avatar">
        <i className="pic">&#xf406;</i>
        <p>{props.name}</p>
        <br/>
          <p><span className="profile-info">{props.tweets}</span></p>
          <p><span className="profile-info">{props.following}</span></p>
          <p><span className="profile-info">{props.followers}</span></p>
      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired
}

export default Profile;