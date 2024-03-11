import React from "react";
import Header from "./Header";

import Profile from "./Profile";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <hr/>
      <div className="profile">
        <Profile/>
      </div>
    </React.Fragment>
  );
}

export default App;