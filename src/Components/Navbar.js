import React from "react";
import logo from "../Images/1.JPG"
import logo1 from "../Images/logo192.png"
import logo2 from "../Images/pc logo 2.png"
import logo3 from "../Images/pc logo.png"

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#E4CB0E"}}>
        <div className="container-fluid">
            <img src={logo} style={{width: 75}} alt="logo"/>
            <h2>THE PC HIGH SCHOOL</h2>
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
      {/* <nav classNameName="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "yellow"}}>
        <div classNameName="container-fluid">
          <button
            classNameName="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i classNameName="fas fa-bars"></i>
          </button>

          <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
            <a classNameName="navbar-brand mt-2 mt-lg-0" href={"/"}>
            <img src={logo} style={{width: 100}} alt="Logo" />
            <img src={logo1} style={{width: 100}} alt="Logo" />
            <img src={logo2} style={{width: 100}} alt="Logo" />
            <img src={logo3} style={{width: 100}} alt="Logo" />
            </a>
            <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
              <li classNameName="nav-item">
                <a classNameName="nav-link" href={"/"}>
                  Dashboard
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href={"/"}>
                  Team
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href={"/"}>
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div classNameName="d-flex align-items-center">
            <a classNameName="text-reset me-3" href={"/"}>
              <i classNameName="fas fa-shopping-cart"></i>
            </a>

            <div classNameName="dropdown">
              <a
                classNameName="text-reset me-3 dropdown-toggle hidden-arrow"
                href={"/"}
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i classNameName="fas fa-bell"></i>
                <span classNameName="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                classNameName="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a classNameName="dropdown-item" href={"/"}>
                    Some news
                  </a>
                </li>
                <li>
                  <a classNameName="dropdown-item" href={"/"}>
                    Another news
                  </a>
                </li>
                <li>
                  <a classNameName="dropdown-item" href={"/"}>
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <div classNameName="dropdown">
              <a
                classNameName="dropdown-toggle d-flex align-items-center hidden-arrow"
                href={"/"}
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  classNameName="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                classNameName="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a classNameName="dropdown-item" href={"/"}>
                    My profile
                  </a>
                </li>
                <li>
                  <a classNameName="dropdown-item" href={"/"}>
                    Settings
                  </a>
                </li>
                <li>
                  <a classNameName="dropdown-item" href={"/"}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
    </div>
  );
}