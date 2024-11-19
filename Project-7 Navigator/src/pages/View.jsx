import React, { useState } from 'react';
import './add.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header';
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { FaBook } from "react-icons/fa";

const View = () => {
    let data = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    const [record, setRecord] = useState(data);
    const [mDelete, setMDelete] = useState([]);
    const [editData, setEditData] = useState(''); 

    const handleDelete = (id) => {
        let remove = record.filter(val => val.id !== id);
        localStorage.setItem('user', JSON.stringify(remove));
        setRecord(remove);
        toast("Record deleted...");
    };

    const multiDeleteBtn = () => {
        if (mDelete.length === 0) {
            toast.error("At least one(1) row select");
            return false;
        }

        let deleteRecord = record.filter(val => !mDelete.includes(val.id));
        localStorage.setItem('user', JSON.stringify(deleteRecord));
        toast("Records deleted...");
        setRecord(deleteRecord);
    };

    const multiDelete = (id, checked) => {
        let old = [...mDelete];

        if (checked) {
            old.push(id);
        } else {
            old = old.filter(val => val !== id);
        }
        setMDelete(old);
    };

    const multipleDelete = () => {
        let d = record.filter(val => !mDelete.includes(val.id));

        localStorage.setItem('user', JSON.stringify(d));
        setRecord(d);
        toast("Records deleted...");
        setMDelete([]);
    };

    const changeStatus = (id, status) => {
        let updatedRecord = record.map((val) => {
            if (val.id === id) {
                val.status = status === "active" ? "deactive" : "active"; 
            }
            return val;
        });
        localStorage.setItem('user', JSON.stringify(updatedRecord));
        setRecord(updatedRecord);
        toast(`Status changed to ${status === "active" ? "deactive" : "active"}`);
    };

    const handleEdit = (id) => {
        const selectedRecord = record.find(val => val.id === id);
        setEditData(selectedRecord); 
    };

    const handleSave = () => {
        const updatedRecords = record.map(val => val.id === editData.id ? editData : val);
        setRecord(updatedRecords);
        localStorage.setItem('user', JSON.stringify(updatedRecords));
        setEditData(null); 
        toast("Record updated successfully!");
    };

    const handleChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div align="center">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12  mt-5 "   style={{justifyContent:"center"}}>
                        <table className="table" border={2}  align='center'>
                            <thead>
                                <tr>
                                    <th scope="col" className='py-3 px-5'><FaBook   style={{fontSize:"22px"}}/></th>
                                    <th scope="col" className='py-3 px-5'>Title</th>
                                    <th scope="col" className='py-3 px-5'>Description</th>
                                    <th scope="col" className='py-3 px-5'>Status</th>
                                    <th scope="col" className='py-3 px-5'>Action</th>
                                    <th scope="col" className='py-3 px-5'>
                                        <button onClick={() => multiDeleteBtn()} className='btn btn-sm '><MdDelete   style={{fontSize:"25px" , color:"black" , backgroundColor:"white",marginLeft:"30px" }}/></button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    record.map((val) => {
                                        return (
                                            <tr key={val.id}>
                                                <td className='py-3 px-5'>{<FaBook   style={{fontSize:"22px"}}/>}</td>
                                                <td className='py-3 px-5'>
                                                    {editData && editData.id === val.id ?
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={editData.name}
                                                            onChange={handleChange}
                                                        />
                                                        : val.name}
                                                </td>
                                                <td className='py-3 px-5'>
                                                    {editData && editData.id === val.id ?
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            value={editData.phone}
                                                            onChange={handleChange}
                                                        />
                                                        : val.phone}
                                                </td>
                                                <td className='py-3 px-5'>
                                                    <button
                                                        onClick={() => changeStatus(val.id, val.status)}
                                                        className={`btn btn-sm ${val.status === "active" ? 'btn-success' : 'btn-danger'}`}
                                                    >
                                                        {val.status}
                                                    </button>
                                                </td>
                                                <td className='py-3 px-4'>
                                                    {editData && editData.id === val.id ?
                                                        <button onClick={handleSave} className='btn btn-sm btn-success'>Save</button>
                                                        :
                                                        <>
                                                            <button onClick={() => handleDelete(val.id)} className='btn btn-sm'><MdDelete   style={{fontSize:"25px" , color:"black" , backgroundColor:"white",marginLeft:"10px" }}/></button>
                                                            <button onClick={() => handleEdit(val.id)} className='btn btn-sm '><FiEdit  style={{fontSize:"23px" , color:"black" , backgroundColor:"white", }} />
                                                            </button>
                                                        </>
                                                    }
                                                </td>
                                                <td className='py-3  pt-4  text-center'>
                                                    <input type="checkbox" onChange={(e) => multiDelete(val.id, e.target.checked)}  style={{width:"20px" , height:"20px" , marginRight:"30px"}} />
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
};

export default View;
