import React from "react";
import PostTweet from "./PostTweet";
import TweetsList from "./TweetsList";

function NewsFeed() {
  return (
    <React.Fragment>
      <PostTweet/>
      <TweetsList/>
    </React.Fragment>
  );
}

export default NewsFeed;