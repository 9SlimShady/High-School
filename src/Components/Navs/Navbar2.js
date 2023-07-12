import React from "react";
import logo from "../Images/1.JPG";
import "../CSS/Navbar.css";
import { BsSearch } from "react-icons/bs";
export default function Navbar2() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#E4CB0E" }}
      >
        <div className="container">
          <img src={logo} style={{ width: 75 }} alt="logo" />
          <h4
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bold",
            }}
          >
            TPHS
          </h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon">
              <BsSearch style={{ color: "black" }} />
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <div class="input-group rounded">
                <input
                  style={{ outline: "none" }}
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  id="search"
                />

                <button class="input-group-text border-0" id="search-addon">
                  <BsSearch />
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
