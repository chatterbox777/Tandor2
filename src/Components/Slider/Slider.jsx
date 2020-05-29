//made repository

import React from "react";
import classList from "./Slider.module.css";

const radioActive = classList.slider__radio__active;

class Slider extends React.Component {
  state = {
    leftBtn: "<",
    rightBtn: ">",
    inputs: [
      {
        type: "radio",
        id: "1",
        active: true,
      },
      {
        type: "radio",
        id: "2",
        active: false,
      },
      {
        type: "radio",
        id: "3",
        active: false,
      },
      {
        type: "radio",
        id: "4",
        active: false,
      },
    ],
  };

  changeActive(e, id) {
    e.preventDefault();
    this.setState({
      ...this.state,
    });
  }

  render() {
    return (
      <div className={classList.slider__container}>
        <div className={classList.slider__inputs}>
          {this.state.inputs.map((input) => (
            <input
              onClick={(e) => this.changeActive(e, input.id)}
              key={input.id}
              type={input.type}
              className={input.active ? radioActive : null}
            />
          ))}
        </div>
        <div className={classList.slider__buttons}>
          <div className={classList.slider__button_left}>
            <p> {this.state.leftBtn} </p>
          </div>
          <div className={classList.slider__button_right}>
            <p> {this.state.rightBtn}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
