import React from "react";
import PropTypes from "prop-types";
import profileIcon from "./../img/profile-icon.jpg";

function Profile(props) {
  return (
    <div className="profile">
      <img src={profileIcon} alt="A profile icon image."/>
      <p>{props.name}</p>
      <br/>
        <p><span className="profile-info">{props.tweets}</span></p>
        <p><span className="profile-info">{props.following}</span></p>
        <p><span className="profile-info">{props.followers}</span></p>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired
}

export default Profile;