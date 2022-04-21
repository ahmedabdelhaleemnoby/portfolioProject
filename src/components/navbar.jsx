import React from "react";
import logo from "../Nubian_SKin_Logo_copy-removebg-preview.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo..." className="logo" />
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active me-3 ms-3"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3 ms-3" href="/">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3 ms-3" href="/">
                services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3 ms-3" href="/">
                how work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3 ms-3" href="/">
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3 ms-3" href="/">
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
