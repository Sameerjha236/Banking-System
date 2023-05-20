import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Basic Banking System</h1>
      <p>
        This is a simple banking system where you can view customer data and
        transfer money between accounts.
      </p>
      <div className="btn">
        <NavLink to="/view_customer">View All Customer</NavLink>
      </div>
    </div>
  );
};

export default Home;
