import React from "react";

import "./AnnouncementSection.css";

const AnnouncementSection = ({ imageUrl, title, subtitle, description }) => {
  return (
    <div
      className='announcement-section'
      style={{ "--announcement-image": `url(${imageUrl})` }}
    >
      <div className='announcement'>
        {subtitle && <span className='subtitle'>{subtitle}</span>}
        {title && <span className='title'>{title}</span>}
        {description && <span className='description'>{description}</span>}
      </div>
    </div>
  );
};

export default AnnouncementSection;
