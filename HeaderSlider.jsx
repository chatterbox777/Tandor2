import React from "react";
import classList from "./HeaderSlider.module.css";

import Slider from "../Slider/Slider";

class HeaderSlider extends React.Component {
  state = {
    slides: [
      {
        id: 1,
        serviceName: "Бухгалтерские услуги в Санкт-Петербурге",
        buttonText: "Наша презентация",
        active: true,
        type: "radio",
      },
      {
        id: 2,
        serviceName: "Юридические услуги в Москве",
        buttonText: "Наша презентация",
        active: false,
        type: "radio",
      },
      {
        id: 3,
        serviceName: "Занятие по кикбоксингу в Ярославле",
        buttonText: "Наша презентация",
        active: false,
        type: "radio",
      },
      {
        id: 4,
        serviceName: "Онлайн клуб в Краснодаре = заря",
        buttonText: "Наша презентация",
        active: false,
        type: "radio",
      },
    ],
    isActive: 1,
  };

  changeActive = (e, id) => {
    debugger;
    e.preventDefault();

    const list = this.state.slides.map((el) => {
      return { ...el, active: el.id === id ? true : false };
    });
    this.setState({
      ...this.state,
      slides: list,
      isActive: id,
    });
  };
  prevSlide = () => {
    const slideLength = this.state.slides.length;
    if (this.state.isActive > slideLength - slideLength + 1) {
      this.setState({
        ...this.state,
        isActive: this.state.isActive - 1,
      });
    }
  };

  nextSlide = () => {
    const slideLength = this.state.slides.length;
    if (this.state.isActive < slideLength) {
      this.setState({
        ...this.state,
        isActive: this.state.isActive + 1,
      });
    }
  };

  render() {
    return (
      <div className={classList.header__slider}>
        {this.state.slides
          .filter((el) => el.id === this.state.isActive)
          .map((el) => (
            <div key={el.id}>
              <h1>{el.serviceName}</h1>
              <button>{el.buttonText}</button>
            </div>
          ))}
        <Slider
          isActive={this.state.isActive}
          changeActive={this.changeActive}
          slides={this.state.slides}
          prevSlide={this.prevSlide}
          nextSlide={this.nextSlide}
        />
      </div>
    );
  }
}

export default HeaderSlider;
