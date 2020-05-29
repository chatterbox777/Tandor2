import React from "react";
import classList from "./HeaderSlider.module.css";
import firstSliderImg from "../../images/slider/slider1.png";
import secondSliderImg from "../../images/slider/slider2.jpg";
import thirdSliderImg from "../../images/slider/slider3.jpg";
import Slider from "../Slider/Slider";

class HeaderSlider extends React.Component {
  state = {
    h1: "Бухгалтерские услуги в Санкт-Петербурге",
    buttonText: "Наша презентация",
  };

  render() {
    return (
      <div className={classList.header__slider}>
        <img src={firstSliderImg} alt="Saint-Petersburg" />
        <h1>{this.state.h1}</h1>
        <button>{this.state.buttonText}</button>
        <Slider />
      </div>
    );
  }
}

export default HeaderSlider;
