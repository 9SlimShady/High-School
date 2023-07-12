import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar3.css";
export default function Navbar3() {
  return (
    <>
      {
        <nav
          style={{ backgroundColor: "black" }}
          class="navbar navbar-expand-sm"
        >
          <div className="container">
            <button
              type="button"
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav">
                <a
                  style={{
                    color: "white",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "20px",
                  }}
                  href={"#"}
                  class="nav-item nav-link active"
                >
                  Home
                </a>
                <a
                  style={{
                    color: "white",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "20px",
                  }}
                  href={"/"}
                  class="nav-item nav-link"
                >
                  Profile
                </a>
                <div class="nav-item dropdown">
                  <a
                    style={{
                      color: "white",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "20px",
                    }}
                    href={"#"}
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Messages
                  </a>
                  <div class="dropdown-menu">
                    <a href={"#"} class="dropdown-item">
                      Inbox
                    </a>
                    <a href={"#"} class="dropdown-item">
                      Sent
                    </a>
                    <a href={"#"} class="dropdown-item">
                      Drafts
                    </a>
                  </div>
                </div>
                <div style={{ marginLeft: "180%" }} class="dropdown2">
                  <button
                    style={{ color: "white", textAlign: "right" }}
                    class="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    My Account
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href={"#"}>
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href={"#"}>
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href={"#"}>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <Link>f</Link>
              </div>
              
            </div>
          </div>
        </nav>
      }
    </>
  );
}
