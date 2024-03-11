import React from "react";

function Profile() {
  return (
    <React.Fragment>
      <div className="avatar">
        <i class="pic">&#xf406;</i>
        <p>Brian Czerner</p>
        <div class="profile-info">
          <p>Tweets</p>
          <p>Following</p>
          <p>Followers</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;