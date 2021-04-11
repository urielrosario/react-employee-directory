import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <nav className="navbar navbar-light bd-light justify-content-center">
      <form className="form-inline m-2">
        <input
          className="form"
          value={props.value}
          name="Search"
          placeholder="Search Employee"
          onChange={props.handleInputChange}
        ></input>
      </form>
    </nav>
  );
};
export default SearchBar;
