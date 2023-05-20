import React from "react";
import { useGlobalContext } from "../Context";
import Row from "../Components/Row";
const Transaction = () => {
  const { transact } = useGlobalContext();
  console.log(transact);
  return (
    <div className="transact">
      <h1>Total Transactions are {transact.length}</h1>
      <div className="trans">
        <div className="person">
          <p>
            <h3>From</h3>
          </p>
          <p>
            <h3>To</h3>
          </p>
          <p>
            <h3>Amount</h3>
          </p>
        </div>
        {transact.map((person) => {
          const id = person.id;
          return <Row key={id} {...person} />;
        })}
      </div>
    </div>
  );
};

export default Transaction;
