import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
import { GrView } from "react-icons/gr";

const Header = () => {
  return (
    <div className='container-fluid'>
      <div className="row ">
      <nav className="navbar navbar-expand-lg bg-black   ">
        <div className="container">
          <a className="navbar-brand   text-white" href="#"> React app</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/add'} className="nav-link active  text-white" aria-current="page" href="#"><IoMdAdd   style={{fontSize:"30px"}}/></Link>
              </li> 
              <li className="nav-item">
                <Link to={'/'} className="nav-link active   text-white" aria-current="page" href="#"><GrView   style={{fontSize:"25px"}} /></Link>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </div>
  )
}

export default Header
