import React from "react";
import styled from "styled-components";

const SkillsCard = ({ photo, desc }) => {
  return (
    <SkillsCardStyled>
      <div className="container">
        <img src={photo} alt="img" />
        <h4>{desc}</h4>
      </div>
    </SkillsCardStyled>
  );
};

const SkillsCardStyled = styled.div`
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
    width: 9rem;
    img {
      width: 50%;
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
  }
`;

export default SkillsCard;
