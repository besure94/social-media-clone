import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import SearchBar from "./SearchBar";
import Tweet from "./Tweet";

function App() {
  return (
    <React.Fragment>
      <div class="container">
        <Header/>
        <div class="tabs-and-features">
          <Tabs/>
          <div class="features">
            <SearchBar/>
            <Tweet/>
          </div>
        </div>
      </div>
      <hr/>
    </React.Fragment>
  );
}

export default App;