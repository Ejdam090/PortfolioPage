import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import Web from "./../assets/design.png";
import Dev from "./../assets/coding.png";
import App from "./../assets/coding-app.png";

const ServiceSection = () => {
  return (
    <InnerLayout>
      <ServiceSectionStyled>
        <Title title={"Services"} span={"Services"} />
        <div className="services">
          <ServiceCard
            image={Web}
            title={"Web design"}
            paragraph={
              "I do ui/ux design for the website that helps website to get a unique look."
            }
          />
          <ServiceCard
            image={Dev}
            title={"Web Dev"}
            paragraph={
              "I also develop the websites. I create high performance website with blazing fast speed."
            }
          />
          <ServiceCard
            image={App}
            title={"App Dev"}
            paragraph={
              "I develop application. I create mobile app with eye catching ui."
            }
          />
        </div>
      </ServiceSectionStyled>
    </InnerLayout>
  );
};

const ServiceSectionStyled = styled.div`
  .services {
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    margin-top: 5rem;
  }
  @media (max-width: 481px) {
    .services {
      flex-flow: column;
    }
  }
`;

export default ServiceSection;
