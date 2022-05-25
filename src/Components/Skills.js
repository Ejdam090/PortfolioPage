import React from "react";
import styled from "styled-components";
import SkillsCard from "./SkillCard";
import Title from "./Title";
import HTML5 from "./../assets/html5.svg";
import CSS3 from "./../assets/css3.svg";
import JS from "./../assets/javascript.svg";
import REACT from "./../assets/react.svg";
import SCSS from "./../assets/sass.svg";
import StyledCom from "./../assets/styled.svg";
import node from "./../assets/node.svg";
import webPack from "./../assets/webpack.svg";

const SkillsSection = () => {
  return (
    <SkillsCardStyled>
      <Title title={"Skills"} span={"Skills"} />
      <div className="skills-content">
        <SkillsCard photo={HTML5} desc={"HTML5"} />
        <SkillsCard photo={CSS3} desc={"CSS3"} />
        <SkillsCard photo={JS} desc={"JavaScript"} />
        <SkillsCard photo={REACT} desc={"React.js"} />
      </div>
      <div className="skills-content">
        <SkillsCard photo={SCSS} desc={"Sass"} />
        <SkillsCard photo={StyledCom} desc={"Styled Components"} />
        <SkillsCard photo={node} desc={"Node.js"} />
        <SkillsCard photo={webPack} desc={"WebPack"} />
      </div>
    </SkillsCardStyled>
  );
};

const SkillsCardStyled = styled.div`
  .skills-content {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
`;
export default SkillsSection;
