import React, { useState } from "react";
import AccordionMarker from "./AccordionMarker";
import AccordionElement from "./AccordionElement";

import "./Accordion.css";

const Accordion = ({ scheduleItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const currentItem = scheduleItems[activeIndex];
  const prevIndex =
    activeIndex === 0 ? scheduleItems.length - 1 : activeIndex - 1;
  const previousItem = scheduleItems[prevIndex];

  return (
    <React.Fragment>
      {scheduleItems.length > 0 && (
        <div className='schedule-container'>
          <div className='left-border-overlay' />

          <AccordionMarker
            backgroundColor={previousItem.sectionColour}
            topSpacing={`${(activeIndex + 1) * 60 + activeIndex * 40}px`}
            imageUrl={currentItem.icon}
          />

          {scheduleItems.map((item, index) => (
            <AccordionElement
              key={index}
              item={item}
              isActive={index === activeIndex}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Accordion;
