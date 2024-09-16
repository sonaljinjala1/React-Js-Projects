import React, { Component } from "react";

class DataTable extends Component {
  render() {
    return (
      <table className="data-table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Course</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>{data.course.join(", ")}</td>
              <td>{data.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default DataTable;

