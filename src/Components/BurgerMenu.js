import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerMenuStyled open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerMenuStyled>
      <RightNav open={open} />
    </>
  );
};

const BurgerMenuStyled = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  display: none;
  top: 10px;
  right: 20px;
  cursor: pointer;
  z-index: 20;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    margin: 9px 1px 1px 1px;
    background-color: ${({ open }) =>
      open ? "var(--font-light-color)" : "var(--white-color)"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default BurgerMenu;
