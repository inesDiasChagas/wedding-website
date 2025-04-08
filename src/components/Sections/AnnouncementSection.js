import React from "react";

import "./AnnouncementSection.css";

const AnnouncementSection = ({ imageUrl, title, subtitle, description }) => {
  return (
    <div
      className='announcement-section'
      style={{ "--announcement-image": `url(${imageUrl})` }}
    >
      <div className='announcement'>
        <span className='subtitle'>{subtitle}</span>
        <span className='title'>{title}</span>
        <span className='description'>{description}</span>
      </div>
    </div>
  );
};

export default AnnouncementSection;
