import React from "react";
import styled from "styled-components";
import Particless from "../Components/Particles";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>
      <div className="tparticles">
        <Particless />
      </div>
      <div className="typography">
        <h1>
          Hi I'm <span> Adam Kosior</span>
        </h1>
        <p>
          I am a beginner Web Developer. You can find out all about me by
          browsing my portfolio!
        </p>
        <div className="icons">
          <a
            href="https://www.facebook.com/adam.kosior.92/"
            className="icon i-facebook"
          >
            <FacebookIcon />
          </a>
          <a href="https://github.com/Ejdam090" className="icon i-github">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/adam-kosior/"
            className="icon i-linked"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 0.1rem;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
  .typography {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-linked {
        &:hover {
          border: 2px solid #1976d2;
          color: #1976d2;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
  .tparticles {
    position: absolute;
    top: 0;
    left: 0;
  }
  @media (max-width: 1137px) {
    p {
      font-size: 1rem;
    }
  }
`;

export default HomePage;
