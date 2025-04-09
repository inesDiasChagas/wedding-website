import React, { useState } from "react";

import SectionWrapper from "../components/Sections/SectionWrapper";
import clock from "../styles/images/clock.png";

import "./SchedulePage.css";

const scheduleItems = [
  {
    time: "16:00 – 16:30",
    title: "Chegada dos Convidados",
    description: "",
    icon: "🪑",
    color: "#CBDDC4",
  },
  {
    time: "16:30 – 17:00",
    title: "Cerimónia",
    description: "",
    icon: "💍",
    color: "#B9CFB2",
  },
  {
    time: "17:00 – 18:30",
    title: "Cocktail & Fotos",
    description: "",
    icon: "🥂",
    color: "#A7C19F",
    button: true,
  },
  {
    time: "18:30 – 19:00",
    title: "Sentar nos Lugares",
    description: "Consulta a disposição dos lugares aqui.",
    icon: "🪑",
    color: "#96B38D",
  },
  {
    time: "19:00 – 21:30",
    title: "Jantar + Dedicatorias",
    description: "",
    icon: "🍽️",
    color: "#87A57C",
  },
  {
    time: "21:30 – 22:00",
    title: "Bolo + Champanhe",
    description: "",
    icon: "🍰",
    color: "#78976C",
  },
  {
    time: "22:00 – 01:00",
    title: "Dança + Open Bar",
    description: "",
    icon: "💃",
    color: "#6A895D",
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
              style={{ backgroundColor: item.color }}
              onClick={() => setActiveIndex(index)}
            >
              <div className='schedule-summary'>
                <img src={clock} alt='Clock icon' className='icon' />
                <span className='time'>{item.time}</span>
              </div>
              {isActive && (
                <div className='schedule-details'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.button && (
                    <button className='info-btn'>More information</button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default SchedulePage;
