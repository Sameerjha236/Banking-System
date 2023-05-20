import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import axios from "axios";
const Transfer = () => {
  const { data } = useGlobalContext();
  const [from, setFrom] = useState("Sameer Jha");
  const [to, setTo] = useState("Sameer Jha");
  const [amt, setAmt] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    if (from === to) {
      alert("Both Users Are Same");
    } else {
      const fromIndex = data.findIndex((item) => item.name === from);
      const toIndex = data.findIndex((item) => item.name === to);
      const curr = data[fromIndex].balance;
      if (curr < amt) {
        alert("Low Balance");
      } else {
        let a = curr - amt;
        let b = data[toIndex].balance + parseInt(amt, 10);
        console.log(data[toIndex]);
        axios.post("http://localhost:3001/api/update", {
          name1: data[fromIndex].name,
          name2: data[toIndex].name,
          amt1: a,
          amt2: b,
          amt: amt,
        });
      }
    }
  };

  return (
    <div className="transfer">
      <h2>Transfer Money</h2>
      <form className="form" onSubmit={submitHandler}>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {data.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {data.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <label htmlFor="amount">Amount : </label>
        <input
          type="text"
          name="amount"
          id="amount"
          value={amt}
          onChange={(e) => setAmt(e.target.value)}
        />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default Transfer;
