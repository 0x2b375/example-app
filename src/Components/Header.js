import React from "react";
import "./Header.css";
import { Outlet, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="sticky">
        <nav className="nav">
          <h1 className="title">React Website</h1>
          <ul>
            <li>
              <NavLink to="/" exact className="button" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="button" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="button"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </header>
  );
}

export default Header;
