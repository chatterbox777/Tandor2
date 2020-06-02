import React from "react";
import classList from "./HeaderSlider.module.css";
import firstSliderImg from "../../images/slider/slider1.png";
import secondSliderImg from "../../images/slider/slider2.jpg";
import thirdSliderImg from "../../images/slider/slider3.jpg";
import Slider from "../Slider/Slider";

class HeaderSlider extends React.Component {
  state = {
    slides: [
      {
        id: 1,
        serviceName: "Бухгалтерские услуги в Санкт-Петербурге",
        buttonText: "Наша презентация",
      },
      {
        id: 2,
        serviceName: "Юридические услуги в Москве",
        buttonText: "Наша презентация",
      },
      {
        id: 3,
        serviceName: "Занятие по кикбоксингу в Ярославле",
        buttonText: "Наша презентация",
      },
      {
        id: 4,
        serviceName: "Онлайн клуб в Краснодаре = заря",
        buttonText: "Наша презентация",
      },
    ],
    isActive: 1,
  };

  render() {
    return (
      <div className={classList.header__slider}>
        {this.state.slides
          .filter((el) => el.id === this.state.isActive)
          .map((el) => (
            <div>
              <h1>{el.serviceName}</h1>
              <button>{el.buttonText}</button>
            </div>
          ))}
        <Slider isActive={this.state.isActive} />
      </div>
    );
  }
}

export default HeaderSlider;
