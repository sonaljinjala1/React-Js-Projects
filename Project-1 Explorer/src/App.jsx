import React, { Component } from "react";
import DataTable from "./DataTable"; // Child component
import "./App.css"; // CSS file for styling




// Create a Class based component to implement this data pass to another component show in your component and must be use props using css


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Kishan",
          email: "kishan@gmail.com",
          password: "kishan@123",
          course: ["HTML", "CSS", "Bootstrap", "JS"],
          city: "Surat",
        },
        {
          id: 2,
          name: "Jay",
          email: "jay@gmail.com",
          password: "jay@123",
          course: ["Photoshop", "Figma", "Illustrator", "Adobe XD"],
          city: "Rajkot",
        },
        {
          id: 3,
          name: "Ajay",
          email: "ajay@gmail.com",
          password: "ajay@123",
          course: ["HTML", "CSS", "Bootstrap", "NodeJS"],
          city: "Amareli",
        },
        {
          id: 4,
          name: "Nisha",
          email: "nisha@gmail.com",
          password: "nisha@123",
          course: ["HTML", "CSS", "Bootstrap", "Python"],
          city: "Vadodara",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Users Data</h1>
        {/* Passing the data to DataTable component as props */}
        <DataTable data={this.state.data} />
      </div>
    );
  }
}

export default App;
