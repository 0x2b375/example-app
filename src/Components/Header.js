import React from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="sticky">
        <h1 className="title">React Website</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className="button" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="button" activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="button" activeClassName="active">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </header>
  );
}

export default Header;
