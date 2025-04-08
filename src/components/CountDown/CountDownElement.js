import React from "react";

import "./CountDownElement.css";

const CountDownElement = ({ title, value }) => {
  return (
    <div className='countdown-element'>
      <span className='countdown-value'>{value}</span>
      <span className='countdown-title'>{title}</span>
    </div>
  );
};

export default CountDownElement;
