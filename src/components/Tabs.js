import React from "react";

function Tabs(props) {
  return (
    <React.Fragment>
      <div id="home-tabs">
        <div className="tabs">
          <p><span class="tab-select">{props.home}</span></p>
          <p><span class="tab-select">{props.notifications}</span></p>
          <p>{props.messages}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Tabs;