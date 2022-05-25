import React from "react";
import styled from "styled-components";
import resume from "./../assets/person.jpg";
import PrimaryButton from "./PrimaryButton";
import fileCV from "./../assets/CV-Adam-Kosior.pdf";

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="zdjęcie" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Adam Kosior</span>
        </h4>
        <p className="paragraph">
          I am hardworking and goal-oriented. I always try to solve problems on
          my own. Enthusiast with good teamwork skills. I started my adventure
          with programming about a year ago. I base my knowledge on materials
          available on the web and on creating my own projects.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>Adam Kosior</p>
            <p>25</p>
            <p>Polish</p>
            <p>Polish, English</p>
            <p>Maków Mazowiecki</p>
            <p>Freelance </p>
          </div>
        </div>
        <PrimaryButton href={fileCV} target="_blank" title={"Download CV"} />
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  display: flex;
  margin-top: 5rem;
  .right-content {
    width: 90%;
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 5rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
  }
  .left-content {
    width: 80%;
    margin-right: 2rem;
    img {
      width: 400px;
      height: 500px;
      object-fit: cover;
    }
  }
  @media (max-width: 1130px) {
    .right-content {
      .about-info {
        .info-title {
          padding-right: 3rem;
          p {
            font-size: 1rem;
          }
        }
        .info-title,
        .info {
          p {
            font-size: 0.7rem;
          }
        }
      }
      h4 {
        font-size: 1.5rem;

        span {
          font-size: 1.5rem;
        }
      }
    }
    .paragraph {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    .left-content {
      img {
        width: 300px;
        height: 500px;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 375px) {
    .left-content {
      img {
        width: 200px;
        height: 400px;
        object-fit: cover;
      }
    }
  }
`;

export default ImageSection;
