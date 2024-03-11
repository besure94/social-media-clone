import React from "react";
import Profile from "./Profile";

function Home() {
  return (
    <React.Fragment>
      <Profile
        name="Brian Czerner"
        tweets="Tweets"
        following="Following"
        followers="Followers"
      />
    </React.Fragment>
  );
}

export default Home;