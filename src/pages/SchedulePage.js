import React from "react";
import SectionWrapper from "../components/Sections/SectionWrapper";
import Accordion from "../components/Accordion/Accordion";
import scheduleItems from "../data/scheduleItems.json";

import "./SchedulePage.css";

const SchedulePage = () => {
  return (
    <SectionWrapper>
      <Accordion scheduleItems={scheduleItems} />
    </SectionWrapper>
  );
};

export default SchedulePage;
