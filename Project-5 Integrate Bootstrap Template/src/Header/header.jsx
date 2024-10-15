import React from 'react'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaSearch } from "react-icons/fa";



const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-12">
                        <div className="top-header">
                            <img src="src/img/logo.png" alt="" />

                            <form className="cr-search">
                                <input className='search-input' type="text" placeholder='Search for items...' />
                                <select className='form-select'>
                                    <option selected>All Categories</option>
                                    <option value="1">Mens</option>
                                    <option value="2">Womens</option>
                                    <option value="3">Electronics</option>
                                </select>
                                <button type="button" className='search-btn'>
                                    <p> <FaSearch /></p>
                                </button>
                            </form>



                            <div className="right-bar">
                                <ul className="navbar-nav">
                                    <li className='nav-item'>
                                        <a className=" cr-right-bar-item">
                                            <i class="fa-regular fa-user"></i>
                                            <span>Account</span>

                                            <ul className='dropdown-menu-top'>
                                                <li>
                                                    <a class="dropdown-item" href="#">Register</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">checkout</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">Login</a>
                                                </li>
                                            </ul>
                                        </a>

                                        <a href="#" className='cr-right-bar-item'>
                                            <i class="fa-regular fa-heart"></i>
                                            <span>Wishlist</span>
                                        </a>
                                        <a href="#" className='cr-right-bar-item'>
                                            <i class="fa-solid fa-cart-shopping"></i>
                                            <span>Cart</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className=" bottom-header  d-flex  justify-content-between">
                            <div className="icon">
                                <img src="src/img/menus.png" alt="" width={'30px'} height={'30px'} />
                            </div>
                            <div className="menu-list">
                                <ul className='d-flex'>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Category <i class="fa-solid fa-chevron-down"></i></a>
                                        <div className="droup-down-menu">
                                            <ul>
                                                <li>
                                                    <a href="#">Shop Left  sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Shop  Rightsidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#">Full Width</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Products <i class="fa-solid fa-chevron-down"></i></a>
                                        <div className="droup-down-menu">
                                            <ul style={{ width: "200px" }}>
                                                <li>
                                                    <a href="#">Product Left  sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Product Rightsidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Product Full Width</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Pages <i class="fa-solid fa-chevron-down"></i></a>
                                        <div className="droup-down-menu">
                                            <ul style={{ width: "120px" }}>
                                                <li>
                                                    <a href="#">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Contact Us</a>
                                                </li>
                                                <li>
                                                    <a href="#">Cart</a>
                                                </li>
                                                <li>
                                                    <a href="#">Checkout</a>
                                                </li>
                                                <li>
                                                    <a href="#">Track Order</a>
                                                </li>
                                                <li>
                                                    <a href="#">Wishlist</a>
                                                </li>
                                                <li>
                                                    <a href="#">Faq</a>
                                                </li>
                                                <li>
                                                    <a href="#">Login</a>
                                                </li>
                                                <li>
                                                    <a href="#">Register</a>
                                                </li>
                                                <li>
                                                    <a href="#">Policy</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Blog <i class="fa-solid fa-chevron-down"></i></a>
                                        <div className="droup-down-menu">
                                            <ul  style={{ width: "230px" }}>
                                                <li>
                                                    <a href="#">Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Right Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#">Full Width</a>
                                                </li>
                                                <li>
                                                    <a href="#">Detail Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#">Detail Right Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Detail Full Width</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Elements <i class="fa-solid fa-chevron-down"></i></a>
                                        <div className="droup-down-menu">
                                            <ul>
                                                <li>
                                                    <a href="#">Products</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Typography</a>
                                                </li>
                                                <li>
                                                    <a href="#">Buttons</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                </ul>
                            </div>


                            <div className="calling">
                                <i class="fa-solid fa-phone"></i>
                                <a href="#"> +123 ( 456 ) ( 7890 )</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;
