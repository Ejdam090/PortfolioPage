import React from "react";
import { MainLayout } from "./../styles/Layouts";
import styled from "styled-components";
import SkillsSection from "../Components/Skills";

const ResumePage = () => {
  return (
    <MainLayout>
      <ResumePageStyled>
        <SkillsSection />
      </ResumePageStyled>
    </MainLayout>
  );
};
const ResumePageStyled = styled.div``;

export default ResumePage;
