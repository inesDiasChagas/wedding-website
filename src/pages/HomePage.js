import React from "react";

import CountDown from "../components/CountDown/CountDown";
import SectionWrapper from "../components/Sections/SectionWrapper";
import AnnouncementSection from "../components/Sections/AnnouncementSection";
import image from "../styles/images/image.png";

const HomePage = () => {
  return (
    <React.Fragment>
      <AnnouncementSection
        imageUrl={image}
        title='Mário & Inês'
        subtitle='CASAMENTO'
        description='QUINTA-FEIRA, 26 DE FEVEREIRO DE 2026'
      />
      <SectionWrapper>
        <CountDown />
      </SectionWrapper>
      <SectionWrapper>
        <button>Registar</button>
      </SectionWrapper>
      <SectionWrapper>//Questoes Frequentes</SectionWrapper>
    </React.Fragment>
  );
};

export default HomePage;
