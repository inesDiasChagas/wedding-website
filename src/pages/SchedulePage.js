import React, { useState } from "react";
import SectionWrapper from "../components/Sections/SectionWrapper";
import cocktail from "../styles/images/cocktail.png";

import "./SchedulePage.css";

const scheduleItems = [
  {
    time: "16:00 – 16:30",
    title: "Chegada dos Convidados",
    description: "Bla Bla Bla",
    icon: cocktail,
    sectionColour: "#3F4E48",
    titleColour: "#262F2B",
    descriptionColour: "#262F2B",
  },
  {
    time: "16:30 – 17:00",
    title: "Cerimónia",
    description: "Bla bla bla Bla",
    icon: cocktail,
    sectionColour: "#6E5F58",
    titleColour: "#423935",
    descriptionColour: "#423935",
  },
  {
    time: "17:00 – 18:30",
    title: "Cocktail & Fotos",
    description: "Bla bla bla Bla",
    icon: cocktail,
    sectionColour: "#A49382",
    titleColour: "#62584E",
    descriptionColour: "#62584E",
    button: true,
  },
  {
    time: "18:30 – 19:00",
    title: "Sentar nos Lugares",
    description: "Consulta a disposição dos lugares aqui.",
    icon: cocktail,
    sectionColour: "#D9CBB9",
    titleColour: "#827A6F",
    descriptionColour: "#827A6F",
  },
  {
    time: "19:00 – 21:30",
    title: "Jantar + Dedicatorias",
    description: "Bla Bla Bla",
    icon: cocktail,
    sectionColour: "#8A7566",
    titleColour: "#53463D",
    descriptionColour: "#53463D",
  },
  {
    time: "21:30 – 22:00",
    title: "Bolo + Champanhe",
    description: "Bla Bla Bla",
    icon: cocktail,
    sectionColour: "#BFAE9A",
    titleColour: "#73685C",
    descriptionColour: "#73685C",
  },
  {
    time: "22:00 – 01:00",
    title: "Dança + Open Bar",
    description: "Bla Bla Bla",
    icon: cocktail,
    sectionColour: "#5F5C5A",
    titleColour: "#393736",
    descriptionColour: "#393736",
  },
];

const SchedulePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const currentItem = scheduleItems[activeIndex];
  const prevIndex =
    activeIndex === 0 ? scheduleItems.length - 1 : activeIndex - 1;
  const previousItem = scheduleItems[prevIndex];

  return (
    <SectionWrapper>
      <div className='schedule-container'>
        <div className='left-border-overlay' />

        <div
          className='icon-overlay'
          style={{
            top: `${(activeIndex + 1) * 60 + activeIndex * 40}px`,
            backgroundColor: previousItem.sectionColour,
          }}
        >
          <img
            className='icon-overlay-inner'
            src={currentItem.icon}
            alt={currentItem.title}
          ></img>
        </div>

        {scheduleItems.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`schedule-item ${isActive ? "active" : ""}`}
              style={{ backgroundColor: item.sectionColour }}
              onClick={() => handleItemClick(index)}
            >
              {!isActive && (
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='schedule-icon'
                  style={{ stroke: item.titleColour }}
                >
                  <path
                    d='M12 7V12L13.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
                    stroke={item.titleColour}
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              )}

              <div className='schedule-summary'>
                <span className='schedule-time'>{item.time}</span>
                {isActive && item.title && (
                  <h3
                    style={{ color: item.titleColour }}
                    className='schedule-title'
                  >
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
                  <button className='schedule-info-btn'>
                    Mais informações
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default SchedulePage;
