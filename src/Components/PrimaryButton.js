import React from "react";
import styled from "styled-components";
const PrimaryButton = ({ title, href, target }) => {
  return (
    <PrimaryButtonStyled href={href} target={target}>
      {title}
    </PrimaryButtonStyled>
  );
};
const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: var(--white-color);
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    background-color: var(--white-color);
    width: 100%;
  }
  @media (max-width: 425px) {
    padding: 0.8rem 2rem;
    font-size: 0.7rem;
  }
`;
export default PrimaryButton;
