import React from "react";
import CountDownElement from "./CountDownElement";

import "./CountDownDisplay.css";

const CountDownDisplay = ({ days, hours, minutes, seconds }) => {
  return (
    <React.Fragment>
      <div className='countdown-container'>
        <CountDownElement title={"DIAS"} value={days}></CountDownElement>

        <CountDownElement title={"HORAS"} value={hours}></CountDownElement>

        <CountDownElement title={"MINUTOS"} value={minutes}></CountDownElement>

        <CountDownElement title={"SEGUNDOS"} value={seconds}></CountDownElement>
      </div>
    </React.Fragment>
  );
};

export default CountDownDisplay;
