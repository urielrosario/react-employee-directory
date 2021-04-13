import React from "react";

function SearchResults(props) {
  return (
    <ul className="list-group">
      {props.results.map((result) => (className = "list-group-item"))}
    </ul>
  );
}

export default SearchResults;
