import React, { useState, useEffect } from 'react';
import './App.css';
import TableRow from './TableRow';


const App = () => {
  const [rows, setRows] = useState(() => {
    const savedRows = localStorage.getItem('rows');
    return savedRows ? JSON.parse(savedRows) : []; 
  });

  useEffect(() => {
    localStorage.setItem('rows', JSON.stringify(rows));
  }, [rows]);

  const addRow = () => {
    setRows([...rows, { fullName: "", email: "", salary: "" }]);
  };

  const deleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
  };

  return (
    <div className="container">
      <h1 className="title">React - Add & Delete Table Rows Dynamically</h1>
      <table className="styled-table">
        <thead >
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Salary</th>
            
       <img src="src/assets/img/plus.png" alt=""   onClick={addRow}  width={"45px"} style={{cursor:"pointer" , marginLeft:"15px"}} />
   
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow 
              key={index} 
              index={index}
              row={row}
              deleteRow={deleteRow} 
              handleInputChange={handleInputChange}
            />
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default App;
