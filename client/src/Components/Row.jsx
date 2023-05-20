import React from "react";

const Row = (person) => {
  const { from, to, amount } = person;
  return (
    <div className="row">
      <div className="person">
        <p>{from}</p>
        <p>{to}</p>
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default Row;
