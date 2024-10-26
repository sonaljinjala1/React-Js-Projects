import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const View = () => {
  const navigation = useNavigate()

  let data = JSON.parse(localStorage.getItem('user')) || []
  const [record, setRecord] = useState(data)
  const [mdelete, setMdelete] = useState([])
  const [filteredRecord, setFilteredRecord] = useState(data)
  const [search, setSearch] = useState('')
  const [sortOrder, setSortOrder] = useState('')

  const handleDelete = (id) => {
    const updatedRecords = record.filter((val) => val.id !== id)
    localStorage.setItem('user', JSON.stringify(updatedRecords))
    setRecord(updatedRecords)
    setFilteredRecord(updatedRecords)
    alert("Record deleted successfully.")
  }

  const mulDelete = () => {
    if (mdelete.length === 0) {
      alert("At least one row select")
      return
    }

    const updatedRecords = record.filter(val => !mdelete.includes(val.id))
    localStorage.setItem('user', JSON.stringify(updatedRecords))
    setRecord(updatedRecords)
    setFilteredRecord(updatedRecords)
    alert("Records deleted.")
  }

  const toggleStatus = (id) => {
    const updatedRecords = record.map((val) => {
      if (val.id === id) {
        val.status = val.status === "Deactive" ? "Active" : "Deactive"
      }
      return val
    })
    localStorage.setItem('user', JSON.stringify(updatedRecords))
    setRecord(updatedRecords)
    setFilteredRecord(updatedRecords)
    alert("Status updated.")
  }

  const handlecheckDelete = (id, checked) => {
    const updatedDeleteList = checked ? [...mdelete, id] : mdelete.filter(val => val !== id)
    setMdelete(updatedDeleteList)
  }

  const filterData = (status) => {
    const updatedRecords = record.filter((val) => val.status.toLowerCase() === status.toLowerCase())
    setFilteredRecord(status === '' ? record : updatedRecords)
  }

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase()
    setSearch(value)
    const filtered = record.filter((val) => val.name.toLowerCase().includes(value))
    setFilteredRecord(filtered)
  }

  const handleSort = (e) => {
    const value = e.target.value
    setSortOrder(value)
    setFilteredRecord(sortRecords(filteredRecord, value))
  }

  const sortRecords = (records, order) => {
    if (order === 'az') {
      return [...records].sort((a, b) => a.name.localeCompare(b.name))
    } else if (order === 'za') {
      return [...records].sort((a, b) => b.name.localeCompare(a.name))
    }
    return records
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto mt-5">
            <form className="mb-3 mt-3 d-flex align-items-center">
              <div className="col-lg-4">
                <select className="p-1 form-select" onChange={(e) => filterData(e.target.value)}>
                  <option value="">--- Select ---</option>
                  <option value="active">Active</option>
                  <option value="deactive">Deactive</option>
                </select>
              </div>
              <div className="col-lg-4 me-3">
                <input
                  type="text"
                  className="ms-3 form-control"
                  placeholder="Search here"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
              <div className="col-lg-4">
                <select className="ms-3 p-1 form-select" onChange={handleSort}>
                  <option value="">--- Select Sort ---</option>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
                </select>
              </div>
            </form>

            <table className="table text-center">
              <thead>
                <tr>
                  <th scope="col">Srno</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Course</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                  <th scope="col">
                    <button className="btn btn-sm btn-danger" onClick={mulDelete}>Delete</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  filteredRecord.map((val, index) => (
                    <tr key={val.id}>
                      <td>{index + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.gender}</td>
                      <td>{Array.isArray(val.courses) ? val.courses.join(', ') : ''}</td>
                      <td>{val.date}</td>
                      <td>
                        <button
                          className={`btn btn-sm ${val.status === "Active" ? 'btn-success' : 'btn-warning'}`}
                          onClick={() => toggleStatus(val.id)}
                        >
                          {val.status}
                        </button>
                      </td>
                      <td>
                        <button className='btn btn-sm btn-danger mx-2' onClick={() => handleDelete(val.id)}>Delete</button>
                        <button className='btn btn-sm btn-success mx-2' onClick={() => navigation('./edit', { state: val })}>Edit</button>
                      </td>
                      <td>
                        <input type="checkbox" onChange={(e) => handlecheckDelete(val.id, e.target.checked)} />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
