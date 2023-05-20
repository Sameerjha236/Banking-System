import React from "react";

const Person = (person) => {
  const { ac, balance, name } = person;
  return (
    <div className="person">
      <p>{name}</p>
      <p>{ac}</p>
      <p>{balance}</p>
    </div>
  );
};

export default Person;
