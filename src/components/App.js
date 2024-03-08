import React from "react";
import Header from "./Header";
import Tabs from "./Tabs";
import SearchBar from "./SearchBar";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Tabs/>
      <SearchBar/>
    </React.Fragment>
  );
}

export default App;