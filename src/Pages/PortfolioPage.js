import React from "react";
import styled from "styled-components";
import ProjectSection from "../Components/ProjectSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";

const PortfolioPage = () => {
  return (
    <MainLayout>
      <PortfolioPageStyled>
        <Title title={"Projects"} span={"Projects"} />
        <ProjectSection />
      </PortfolioPageStyled>
    </MainLayout>
  );
};
const PortfolioPageStyled = styled.div``;

export default PortfolioPage;
