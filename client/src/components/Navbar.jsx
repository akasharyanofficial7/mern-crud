import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add">
              Add
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/update">
              Update
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0  m-2">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <button
          className="btn btn-outline-success my-2 my-sm-0 m-2"
          type="submit"
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
