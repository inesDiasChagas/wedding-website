import React, { useState } from "react";

import SectionWrapper from "../components/Sections/SectionWrapper";

import "./SchedulePage.css";

const scheduleItems = [
  {
    time: "16:00 – 16:30",
    title: "Chegada dos Convidados",
    description: "",
    icon: "🪑",
    sectionColour: "#8F674D",
    titleColour: "#2E1F14", // Darker
    descriptionColour: "#4E392A", // Darker
  },
  {
    time: "16:30 – 17:00",
    title: "Cerimónia",
    description: "",
    icon: "💍",
    sectionColour: "#B9977B",
    titleColour: "#5A3F2D", // Darker
    descriptionColour: "#7C5E48", // Darker
  },
  {
    time: "17:00 – 18:30",
    title: "Cocktail & Fotos",
    description: "",
    icon: "🥂",
    sectionColour: "#ECD8C0",
    titleColour: "#7F6A53", // Darker
    descriptionColour: "#90816B", // Darker
    button: true,
  },
  {
    time: "18:30 – 19:00",
    title: "Sentar nos Lugares",
    description: "Consulta a disposição dos lugares aqui.",
    icon: "🪑",
    sectionColour: "#F4D5A1",
    titleColour: "#8A784E", // Darker
    descriptionColour: "#A08E64", // Darker
  },
  {
    time: "19:00 – 21:30",
    title: "Jantar + Dedicatorias",
    description: "",
    icon: "🍽️",
    sectionColour: "#F1F5E0",
    titleColour: "#7C816A", // Darker
    descriptionColour: "#98A08D", // Darker
  },
  {
    time: "21:30 – 22:00",
    title: "Bolo + Champanhe",
    description: "",
    icon: "🍰",
    sectionColour: "#CBDAAB",
    titleColour: "#5F6A3E", // Darker
    descriptionColour: "#6E7C4A", // Darker
  },
  {
    time: "22:00 – 01:00",
    title: "Dança + Open Bar",
    description: "",
    icon: "💃",
    sectionColour: "#B5C2A6",
    titleColour: "#4E563E", // Darker
    descriptionColour: "#6E7A5C", // Darker
  },
];

const SchedulePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionWrapper>
      <div className='schedule-container'>
        {scheduleItems.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`schedule-item ${isActive ? "active" : ""}`}
              style={{ backgroundColor: item.sectionColour }}
              onClick={() => setActiveIndex(index)}
            >
              {!isActive && (
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='schedule-icon'
                  style={{
                    stroke: item.titleColour,
                  }}
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
                    More information
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
