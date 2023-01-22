import React from "react";
import logo from "../Images/1.JPG"
import "./CSS/Navbar.css"
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#E4CB0E"}}>
        <div className="container-fluid">
            <img src={logo} style={{width: 75}} alt="logo"/>
            <h2 className="SchoolHide">THE PC HIGH SCHOOL</h2>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navmenu"
                > 
                <span className="navbar-toggler-icon">-</span>
            </button>

            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="#products" className="nav-link">Products</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul> 
            </div>
        </div>
    </nav>
    </div>
  );
}