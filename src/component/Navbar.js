import React from "react";
import Logo from "../image/Logo.png";

export default function Navbar() {
  return (
    <>
    <div className="shapedividers_com-4654">
    <div className="container ">
      
      <nav className="navbar navbar-expand-lg " id="navbar">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <h3>Code Arena</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">
                  <h4>Home</h4>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <h4>About Us</h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button id="login">
          <p className="btn-txt">Login </p>
          <div className="fill-container"></div>
          <span className="first"></span>
          <span className="second"></span>
          <span className="third"></span>
          <span className="fourth"></span>
        </button>

        
      </nav>
    </div>
    </div>
    </>
  );
}
