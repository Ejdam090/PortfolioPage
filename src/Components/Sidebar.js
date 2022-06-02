import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const SideBar = () => {
  return (
    <SidebarStyled>
      <Navigation />
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
