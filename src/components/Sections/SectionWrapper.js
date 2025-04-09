import React from "react";

import "./SectionWrapper.css";

const SectionWrapper = ({ children, backgroundColour, backgroundImageUrl }) => {
  return (
    <div
      className='section'
      style={{
        "--announcement-image": `url(${backgroundImageUrl})`,
        "--background-colour": `${backgroundColour}`,
      }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
