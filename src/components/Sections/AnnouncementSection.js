import React from "react";

import "./AnnouncementSection.css";
import SectionWrapper from "./SectionWrapper";

const AnnouncementSection = ({
  title,
  subtitle,
  description,
  backgroundColour,
  backgroundImageUrl,
}) => {
  return (
    <SectionWrapper
      className='announcement-section'
      backgroundColour={backgroundColour}
      backgroundImageUrl={backgroundImageUrl}
    >
      <div className='announcement'>
        {subtitle && <span className='subtitle'>{subtitle}</span>}
        {title && <span className='title'>{title}</span>}
        {description && <span className='description'>{description}</span>}
      </div>
    </SectionWrapper>
  );
};

export default AnnouncementSection;
