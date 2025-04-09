import React from "react";

import "./AnnouncementSection.css";

const AnnouncementSection = ({
  title,
  subtitle,
  description,
  backgroundColour,
  backgroundImageUrl,
}) => {
  return (
    <div
      className='announcement-section'
      style={{
        "--announcement-image": `url(${backgroundImageUrl})`,
        "--background-colour": `${backgroundColour}`,
      }}
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
