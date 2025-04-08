import React from "react";

import "./Registry.css";

const Registry = ({ guests }) => {
  return (
    <ul>
      {guests.map((guest) => (
        <li key={guest.id}>
          <span>Nome: {guest.name}</span>
          <span>Estado: {guest.state}</span>
        </li>
      ))}
    </ul>
  );
};

export default Registry;
