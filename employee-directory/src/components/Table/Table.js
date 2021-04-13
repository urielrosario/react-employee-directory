import React from "react";

const Table = (props) => {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th onClick={() => props.filterEmployee} scope="col">
              Name
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result) => (
            <tr key={result.id}>
              <th scope="row">
                <img
                  src={result.picture.thumbnail}
                  alt="employee profile"
                ></img>
              </th>
              <td>{result.name.first + " " + result.name.last}</td>
              <td>{result.phone}</td>
              <td>{result.email}</td>
              <td>{result.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
