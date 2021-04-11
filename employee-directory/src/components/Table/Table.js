import React, { useState } from "react";

function Table(props) {
  return (
    <table className="table table-hover table-striped p-0">
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>DOB</th>
      </tr>
    </table>
  );
}
export default Table;
