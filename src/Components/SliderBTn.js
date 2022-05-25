import React from "react";
import ArrowBackIosIcon from "./../assets/left-arrow.svg";
import ArrowForwardIosIcon from "./../assets/right-arrow.svg";

const SliderBtn = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={direction === "next" ? ArrowForwardIosIcon : ArrowBackIosIcon}
        alt="ico"
      />
    </button>
  );
};

export default SliderBtn;
