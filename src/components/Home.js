import React from "react";
import Profile from "./Profile";
import Bio from "./Bio";
import NewsFeed from "./NewsFeed";

function Home() {
  return (
    <div className="home-container">
      <div className="profile-bio-column">
        <Profile
          name="Brian Czerner"
          tweets="Tweets"
          following="Following"
          followers="Followers"
        />
        <Bio
          bio="29 year old musician and aspiring programmer. 30 in June!"
        />
      </div>
      <div className="newsfeed-column">
        <NewsFeed/>
      </div>
    </div>
  );
}

export default Home;