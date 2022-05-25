import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ProjectData from "../Data/ProjectsData";
import SliderBtn from "./SliderBTn";

const Slider = () => {
  const [slideId, setSlideId] = useState(1);

  const nextSlide = () => {
    if (slideId !== ProjectData.length) {
      setSlideId(slideId + 1);
    } else if (slideId === ProjectData.length) {
      setSlideId(1);
    }
  };
  const prevSlide = () => {
    if (slideId === 1) {
      setSlideId(ProjectData.length);
    } else {
      setSlideId(slideId - 1);
    }
  };
  const moveDot = (index) => {
    setSlideId(index);
  };

  return (
    <SliderStyled>
      {ProjectData.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideId === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={process.env.PUBLIC_URL + `${obj.img}`} alt="img" />
            <div className="slider-content">
              <h4>{obj.title}</h4>
              <p>{obj.desc}</p>
            </div>
          </div>
        );
      })}
      <SliderBtn moveSlide={nextSlide} direction={"next"} />
      <SliderBtn moveSlide={prevSlide} direction={"prev"} />
      <div className="container-dots">
        {Array.from({ length: 6 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideId === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </SliderStyled>
  );
};

const SliderStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
  background-color: var(--background-dark-color-2);
  width: 100%;
  height: 40rem;
  overflow: hidden;
  .slide {
    width: 95%;
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
    img {
      width: 100%;
      object-fit: cover;
    }
    h4 {
      font-size: 1.5rem;
      color: var(--white-color);
      margin-top: 1rem;
    }
    p {
      width: 100%;
      font-size: 1rem;
      text-align: start;
      padding: 1rem;
    }
  }
  .active-anim {
    opacity: 1;
  }

  .btn-slide {
    position: absolute;
    width: 60px;
    height: 60px;
    background-color: var(--background-light-color);
    border-radius: 50%;
    border: 1px solid rgba(34, 34, 34, 0.287);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 25px;
      height: 25px;
      pointer-events: none;
    }
  }
  .prev {
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
  }
  .next {
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
  }
  .container-dots {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  .dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid var(--background-light-color);
    margin: 0 5px;
    background-color: var(--background-light-color);
  }
  .active {
    background-color: rgb(32, 32, 32);
  }
  @media (max-width: 1024px) {
    .btn-slide {
      width: 40px;
      height: 40px;
      img {
        width: 18px;
        height: 18px;
      }
    }
    .prev {
      top: 30%;
    }
    .next {
      top: 30%;
    }
  }
`;

export default Slider;
