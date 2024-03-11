import React from "react";
import Profile from "./Profile";
import Bio from "./Bio";

function Home() {
  return (
    <React.Fragment>
      <Profile
        name="Brian Czerner"
        tweets="Tweets"
        following="Following"
        followers="Followers"
      />
      <Bio
        bio="29 year old musician and aspiring programmer. 30 in June!"
      />
    </React.Fragment>
  );
}

export default Home;