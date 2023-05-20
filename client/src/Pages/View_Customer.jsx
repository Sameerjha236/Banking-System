import React from "react";
import { useGlobalContext } from "../Context";
import Person from "../Components/Person";

const ViewCustomer = () => {
  const { data } = useGlobalContext();

  return (
    <div className="view_cust">
      <h1>Details of Customer In our Database</h1>

      <div className="customers">
        <div className="person">
          <p>
            <h3>Name</h3>
          </p>
          <p>
            <h3>Account Number</h3>
          </p>
          <p>
            <h3>Balance</h3>
          </p>
        </div>
        {data.map((person) => {
          const { id } = person;
          return <Person key={id} {...person} />;
        })}
      </div>
    </div>
  );
};

export default ViewCustomer;
