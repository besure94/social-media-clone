import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import SearchBar from "./SearchBar";
import Tweet from "./Tweet";
import Profile from "./Profile";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header/>
        <div className="tabs-and-features">
          <Tabs/>
          <div className="features">
            <SearchBar/>
            <Tweet/>
          </div>
        </div>
      </div>
      <hr/>
      <div className="profile">
        <Profile/>
      </div>
    </React.Fragment>
  );
}

export default App;