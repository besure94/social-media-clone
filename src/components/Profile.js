import React from "react";

function Profile(props) {
  return (
    <React.Fragment>
      <div className="avatar">
        <i class="pic">&#xf406;</i>
        <p>{props.name}</p>
        <div class="profile-info">
          <p>{props.tweets}</p>
          <p>{props.following}</p>
          <p>{props.followers}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;