import React from "react";

function Tabs() {
  return (
    <React.Fragment>
      <div id="home-tabs">
        <div className="tabs">
          <p><span class="tab-select">Home</span></p>
          <p><span class="tab-select">Notifications</span></p>
          <p>Messages</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Tabs;