import React from "react";
import Tabs from "./Tabs";
import Features from "./Features";

function Header() {
  return (
    <div className="header-container">
      <Tabs
        home="Home"
        notifications="Notifications"
        messages="Messages"/>
      <Features/>
    </div>
  );
}

export default Header;