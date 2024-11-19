
import React from 'react';

const TableRow = ({ index, row, deleteRow, handleInputChange }) => {
  return (
    <tr>
      <td>
        <input 
          type="text" 
          name="fullName" 
          value={row.fullName} 
          onChange={(event) => handleInputChange(index, event)} 
          placeholder="Enter full name" 
        />
      </td>
      <td>
        <input 
          type="email" 
          name="email" 
          value={row.email} 
          onChange={(event) => handleInputChange(index, event)} 
          placeholder="Enter email" 
        />
      </td>
      <td>
        <input 
          type="text" 
          name="salary" 
          value={row.salary} 
          onChange={(event) => handleInputChange(index, event)} 
          placeholder="Enter salary" 
        />
      </td>
      <td>
        <img src="src/assets/img/delete.png"   width={"40px"}  style={{cursor: "pointer" , padding: "2px"}} onClick={() => deleteRow(index)} />
      </td>
    </tr>
  );
};

export default TableRow;
