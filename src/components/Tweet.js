import React from "react";
import profileIcon from "./../img/profile-icon.jpg";
import PropTypes from "prop-types";

function Tweet(props) {
  return (
    <div className="user-post">
      <img src={profileIcon} alt="A profile icon image."/>
      <h4>{props.userName}</h4>
      <p>{props.userTweet}</p>
      <hr/>
    </div>
  );
}

Tweet.propTypes = {
  userName: PropTypes.string,
  userTweet: PropTypes.string
}

export default Tweet;