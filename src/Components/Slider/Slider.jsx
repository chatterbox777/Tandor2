//made repository

import React from "react";
import classList from "./Slider.module.css";

const radioActive = classList.slider__radio__active;

class Slider extends React.Component {
  state = {
    inputs: [
      {
        id: 1,
        active: true,
        type: "radio",
      },
      {
        id: 2,
        active: false,
        type: "radio",
      },
      {
        id: 3,
        active: false,
        type: "radio",
      },
      {
        id: 4,
        active: false,
        type: "radio",
      },
    ],
  };

  changeActive(e, id) {
    e.preventDefault();
    const list = this.state.inputs.map((el) => {
      return { ...el, active: el.id === id ? true : false };
    });
    this.setState({
      ...this.state,
      inputs: list,
    });
  }

  render() {
    return (
      <div className={classList.slider__container}>
        <div className={classList.slider__inputs}>
          {this.state.inputs.map((el) => (
            <input
              key={el.id}
              onClick={(e) => this.changeActive(e, el.id)}
              type={el.type}
              className={el.active ? radioActive : null}
            />
          ))}
        </div>
        <div className={classList.slider__buttons}>
          <div className={classList.slider__button_left}>
            <p> {"<"} </p>
          </div>
          <div className={classList.slider__button_right}>
            <p> {">"}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
