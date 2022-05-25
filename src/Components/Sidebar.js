import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import BurgerMenu from "./BurgerMenu";

const SideBar = () => {
  return (
    <SidebarStyled>
      <Navigation />
      <BurgerMenu />
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  width: 15rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  @media (max-width: 768px) {
    opacity: 0;
  }
`;

export default SideBar;
