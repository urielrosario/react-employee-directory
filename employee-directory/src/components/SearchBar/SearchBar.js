import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <nav className="navbar navbar-light bd-light justify-content-center">
      <form className="form-inline m-2">
        <input
          className="form-control"
          value={props.search}
          name="Search"
          type="text"
          placeholder="Search Employee"
          onChange={props.handleInputChange}
          id="search"
        ></input>
        {/* <button onClick={props.handleFormSubmit}>Search</button> */}
      </form>
    </nav>
  );
};
export default SearchBar;
