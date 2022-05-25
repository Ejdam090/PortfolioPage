import React from "react";
import styled from "styled-components";

const ServiceCard = ({ image, title, paragraph }) => {
  return (
    <ServiceCardStyled>
      <div className="container">
        <img src={image} alt="img" />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  );
};

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-color-2);
  border-left: 2px solid var(--border-color);
  border-right: 2px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  border-radius: 10px;
  margin: 1rem;
  transition: all 0.4s ease-in-out;
  &:hover {
    border-top: 8px solid var(--primary-color);
    transform: translateY(3px);
  }
  .container {
    padding: 1.2rem;
    img {
      width: 30%;
      color: var(--white-color);
    }
    h4 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding: 1rem 0;
      position: relative;
      &::after {
        content: "";
        width: 2rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
    p {
      padding: 0.5rem 0;
    }
  }
  @media (max-width: 1130px) {
    .container {
      p {
        font-size: 1rem;
      }
    }
  }
`;

export default ServiceCard;
