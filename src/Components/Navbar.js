import React from "react";
import logo from "./Images/1.JPG";
import "./CSS/Navbar.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
        <div
        class=""
        style={{ backgroundColor: "black" }}
      >
        <div className="container"><section class="">
          <a
            href={"https://www.facebook.com/thepchighschool/"}
            class="btn btn-outline-light btn-floating m-1"
            target="_blank"
            role="button"
          >
            <BsFacebook />
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href={"https://www.instagram.com/thepchighschooltphs/"}
            role="button"
            target="_blank"
          >
            <BsInstagram />
          </a>
        </section></div>
        
      </div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#E4CB0E" }}
      >
        <div className="container-fluid">
          <img src={logo} style={{ width: 75 }} alt="logo" />
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
                <Link to="/blogs" className="nav-link">Blogs</Link>
              </li>
              <li className="nav-item">
                <a href="#products" className="nav-link">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
