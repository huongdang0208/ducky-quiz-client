import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav
          color="white"
          className="navbar navbar-expand-lg navbar-light bg-light"
        >
          <NavLink className="navbar-brand" to={"/"}>
            <img
              src="https://uploads.codesandbox.io/uploads/user/394a073e-ac76-4500-88bf-59a13ae9a863/5U6A-mercury-logo.png"
              className="d-inline-block align-middle"
              width="50"
              alt="mercury-logo"
              style={{ filter: "invert(100%)" }}
            />
            Online Quiz App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/admin"}>
                  Admin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/quiz-stepper"}>
                  Take Quiz
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/settings">
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link login-Btn text-center" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
