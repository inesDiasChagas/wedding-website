import React from "react";
import ScheduleIcon from "../../styles/icons/ScheduleIcon";

const AccordionElement = ({ item, isActive, onClick }) => {
  return (
    <div
      className={`schedule-item ${isActive ? "active" : ""}`}
      style={{ backgroundColor: item.sectionColour }}
      onClick={onClick}
    >
      {!isActive && <ScheduleIcon strokeColor={item.titleColour} />}

      <div className='schedule-summary'>
        <span className='schedule-time'>{item.time}</span>
        {isActive && item.title && (
          <h3 style={{ color: item.titleColour }} className='schedule-title'>
            {item.title}
          </h3>
        )}
        {isActive && item.description && (
          <p
            style={{ color: item.descriptionColour }}
            className='schedule-description'
          >
            {item.description}
          </p>
        )}
        {isActive && item.button && (
          <button className='schedule-info-btn'>Mais informações</button>
        )}
      </div>
    </div>
  );
};

export default AccordionElement;
