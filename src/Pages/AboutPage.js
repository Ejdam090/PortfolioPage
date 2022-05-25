import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";
import ImageSection from "./../Components/ImageSection";
import ServiceSection from "./../Components/ServicesSection";

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServiceSection />
      </AboutStyled>
    </MainLayout>
  );
};

const AboutStyled = styled.div``;
export default AboutPage;
