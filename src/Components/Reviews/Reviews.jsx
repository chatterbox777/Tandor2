import React from "react";
import classList from "./Reviews.module.css";
import ava1 from "../../images/review/ava1.png";
import ava2 from "../../images/review/ava2.png";
import ava3 from "../../images/review/ava3.png";
import ava4 from "../../images/review/ava4.png";
import ReviewsSlider from "./ReviewsSlider";

class Reviews extends React.Component {
  state = {
    slides: [
      {
        id: 1,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Officia excepturi, ratione quas quo quam totam provident aliquid, 
         doloribus enim quia, dolores aut obcaecati alias dolore commodi 
         optio modi facilis quaerat? LOREM #1`,
        name: "Екатерина Иванова",
        firm: `Директор ООО 'Раз-Два'`,
        ava: ava1,
      },
      {
        id: 2,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Officia excepturi, ratione quas quo quam totam provident aliquid, 
         doloribus enim quia, dolores aut obcaecati alias dolore commodi 
         optio modi facilis quaerat? LOREM #2`,
        name: "Micle Swift",
        firm: `Директор ООО 'Три-Четыре'`,
        ava: ava2,
      },
      {
        id: 3,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Officia excepturi, ratione quas quo quam totam provident aliquid, 
         doloribus enim quia, dolores aut obcaecati alias dolore commodi 
         optio modi facilis quaerat? LOREM #3`,
        name: "Jhon Lenon",
        firm: `Директор ООО 'Пять-Шесть'`,
        ava: ava3,
      },
      {
        id: 4,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Officia excepturi, ratione quas quo quam totam provident aliquid, 
         doloribus enim quia, dolores aut obcaecati alias dolore commodi 
         optio modi facilis quaerat? LOREM #4`,
        name: "Путин В.В.",
        firm: `Директор ООО 'Семь-Восемь'`,
        ava: ava4,
      },
    ],
    isActive: 1,
    startScopeItemsId: 1,
  };

  changeActive = (e, id) => {
    debugger;
    e.preventDefault();

    this.setState({
      ...this.state,
      isActive: id,
      startScopeItemsId: id,
    });
  };
  prevSlide = () => {
    const slideLength = this.state.slides.length;
    if (this.state.isActive > slideLength - slideLength + 1) {
      this.setState({
        ...this.state,
        isActive: this.state.isActive - 1,
        startScopeItemsId: this.state.startScopeItemsId - 1,
      });
      console.log(this.state.startScopeItemsId);
    } else if (this.state.isActive === 1) {
      this.setState({
        isActive: slideLength,
        startScopeItemsId: slideLength,
      });
    }
  };

  nextSlide = () => {
    const slideLength = this.state.slides.length;
    if (this.state.isActive === slideLength) {
      this.setState({
        isActive: 1,
        startScopeItemsId: 1,
      });
    } else {
      this.setState({
        ...this.state,
        isActive: this.state.isActive + 1,
        startScopeItemsId: this.state.startScopeItemsId + 1,
      });
      console.log(this.state.startScopeItemsId);
    }
  };

  render() {
    return (
      <div className={classList.container}>
        <div className={classList.container__main}>
          <h3>Отзывы</h3>
          <h1>Ваши благодарности</h1>
          <div className={classList.container__slider}>
            {this.state.slides
              .filter((el) => el.id === this.state.isActive)
              .map((el) => (
                <div className={classList.container__slider__object}>
                  <p>{el.text}</p>
                  <div
                    className={classList.container__slider__object__imgAndSpan}
                  >
                    <img src={el.ava} alt="" />
                    <div className={classList.container__slider__object__spans}>
                      <span>{el.name}</span>
                      <span>{el.firm}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <ReviewsSlider
          startScopeItemsId={this.state.startScopeItemsId}
          endScopeItemsId={this.state.endScopeItemsId}
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

export default Reviews;
