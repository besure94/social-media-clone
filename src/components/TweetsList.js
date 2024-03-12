import React from "react";
import Tweet from "./Tweet";

const entireTweetList = [
  {
    userName: 'funnyHow94',
    userTweet: 'What a nice day today'
  },
  {
    userName: 'FckUPayMe',
    userTweet: 'Going to the gym'
  },
  {
    userName: 'agingmetalhead',
    userTweet: 'Seeing Sepultura tonight'
  },
  {
    userName: 'gothkid2007',
    userTweet: 'Reading H.P. Lovecraft'
  },
  {
    userName: 'antonnewcombe',
    userTweet: 'Who broke my sitar?'
  }

];

function TweetsList() {
  return (
    <React.Fragment>
      <hr/>
      {entireTweetList.map((tweet, index) =>
        <Tweet userName={tweet.userName}
          userTweet={tweet.userTweet}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default TweetsList;