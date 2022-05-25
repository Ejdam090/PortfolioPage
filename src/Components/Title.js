import React from "react";
import styled from "styled-components";

const Title = ({ title, span }) => {
  return (
    <TitleStyled>
      <h2>
        {title} <span>{span}</span>
      </h2>
    </TitleStyled>
  );
};

const TitleStyled = styled.div`
  position: relative;
  width: 100%;
  h2 {
    color: var(--white-color);
    font-size: 3.1rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.8rem;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 3.5rem;
      height: 0.33rem;
      background-color: var(--primary-color);
      border-radius: 15px;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 7.4rem;
      height: 0.33rem;
      background-color: var(--background-light-color-2);
      border-radius: 15px;
      left: 0;
    }
    span {
      position: absolute;
      left: 0;
      top: 30%;
      font-weight: 900;
      color: rgba(25, 29, 43, 0.44);
      font-size: 5rem;
      z-index: -1;
    }
  }
  @media (max-width: 1024px) {
    h2 {
      font-size: 2.2rem;
      &::before {
        width: 3rem;
      }
      &::after {
        width: 6rem;
      }
      span {
        font-size: 4rem;
      }
    }
  }
`;

export default Title;
