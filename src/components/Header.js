import React from "react";
import Tabs from "./Tabs";
import SearchBar from "./SearchBar";
import Tweet from "./Tweet";

function Header() {
  return (
    <React.Fragment>
      <Tabs
        home="Home"
        notifications="Notifications"
        messages="Messages"/>
      <SearchBar/>
      <Tweet/>
    </React.Fragment>
  );
}

export default Header;