import React from "react";
import classList from "./ReviewsSlider.module.css";

const radioActive = classList.slider__radio__active;
const standardClass = classList.standard;

class ReviewsSlider extends React.Component {
  state = {};

  render() {
    return (
      <div className={classList.slider__container}>
        <div className={classList.slider__inputs}>
          {this.props.slides.map((el) => (
            <input
              key={el.id}
              onClick={(e) => this.props.changeActive(e, el.id)}
              type="radio"
              className={
                el.id === this.props.isActive ? radioActive : standardClass
              }
              id={el.id}
            />
          ))}
        </div>
        <div className={classList.slider__buttons}>
          <div
            onClick={() => this.props.prevSlide()}
            className={classList.slider__button_left}
          >
            <p> {"<"} </p>
          </div>
          <div
            onClick={() => this.props.nextSlide()}
            className={classList.slider__button_right}
          >
            <p> {">"}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsSlider;
