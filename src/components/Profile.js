import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <React.Fragment>
      <div className="profile">
        <div className="avatar">
          <i class="pic">&#xf406;</i>
          <p>{props.name}</p>
          <br/>
            <p><span class="profile-info">{props.tweets}</span></p>
            <p><span class="profile-info">{props.following}</span></p>
            <p><span class="profile-info">{props.followers}</span></p>
        </div>
      </div>
    </React.Fragment>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired
}

export default Profile;