import React from "react";

import CountDown from "../components/CountDown/CountDown";
import SectionWrapper from "../components/SectionWrapper";
import AnnouncementSection from "../components/AnnouncementSection";

const HomePage = () => {
  return (
    <React.Fragment>
      <AnnouncementSection />
      <SectionWrapper>
        <CountDown />
      </SectionWrapper>
      <SectionWrapper>
        <button>Registar</button>
      </SectionWrapper>
    </React.Fragment>
  );
};

export default HomePage;
