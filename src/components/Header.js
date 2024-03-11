import React from "react";
import Tabs from "./Tabs";
import Features from "./Features";

function Header() {
  return (
    <React.Fragment>
      <Tabs
        home="Home"
        notifications="Notifications"
        messages="Messages"/>
      <Features/>
    </React.Fragment>
  );
}

export default Header;