import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import ViewCustomer from "./Pages/View_Customer";
import Error from "./Pages/Error";
import Transfer from "./Pages/Transfer";
import Transaction from "./Pages/Transaction";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="/view_customer" element={<ViewCustomer />} />
          <Route exact path="/transfer" element={<Transfer />} />
          <Route exact path="/transaction" element={<Transaction />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
