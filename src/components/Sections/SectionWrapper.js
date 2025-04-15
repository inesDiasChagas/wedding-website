import React from "react";

import "./SectionWrapper.css";
import classNames from "classnames";

const SectionWrapper = ({
  children,
  className,
  backgroundColour,
  backgroundImageUrl,
}) => {
  return (
    <div
      className={classNames("section", className)}
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
