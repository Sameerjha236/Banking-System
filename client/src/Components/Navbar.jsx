import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-header">
        <h4>
          <NavLink to="/" className="logo">
            Spark
          </NavLink>
        </h4>
      </div>
      <div className="links-container">
        <ul className="links">
          <li>
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/view_customer" className="link">
              View All Customer
            </NavLink>
          </li>
          <li>
            <NavLink to="/transaction" className="link">
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink to="/transfer" className="link">
              Transfer Money
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
