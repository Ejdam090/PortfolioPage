import React from "react";
import styled from "styled-components";
import ContactSection from "../Components/ContactSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";

const ContactPage = () => {
  return (
    <MainLayout>
      <ContactPageStyled>
        <Title title={"Contact Me"} span={"Contact Me"} />
        <ContactSection />
      </ContactPageStyled>
    </MainLayout>
  );
};

const ContactPageStyled = styled.div``;

export default ContactPage;
