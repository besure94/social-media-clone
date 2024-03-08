import React from "react";

function SearchBar() {
  return (
    <React.Fragment>
      <label for="search"></label>
      <input id="search" type="text" placeholder="Search"></input>
    </React.Fragment>
  );
}

export default SearchBar;