import React from "react";
import classList from "./Clients.module.css";
import ClientSlider from "./ClientSlider";
import Microsoft from "../../images/clientslider/microsoft.png";
import Neoterra from "../../images/clientslider/neoterra.jpg";

class Clients extends React.Component {
  state = {
    slides: [
      {
        id: 1,
        alt: "Microsoft",
        img: Microsoft,
      },
      {
        id: 2,
        alt: "Microsoft",
        img: Microsoft,
      },
      {
        id: 3,
        alt: "Microsoft",
        img: Microsoft,
      },
      {
        id: 4,
        alt: "Microsoft",
        img: Microsoft,
      },
      {
        id: 5,
        alt: "Microsoft",
        img: Neoterra,
      },
      {
        id: 6,
        alt: "Microsoft",
        img: Neoterra,
      },
      {
        id: 7,
        alt: "Microsoft",
        img: Neoterra,
      },
      {
        id: 8,
        alt: "Microsoft",
        img: Neoterra,
      },
    ],
    isActive: 1,
    startScopeItemsId: 1,
    endScopeItemsId: 4,
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
        endScopeItemsId: this.state.endScopeItemsId - 1,
      });
    }
  };

  nextSlide = () => {
    debugger;
    const slideLength = this.state.slides.length;
    if (this.state.isActive === slideLength) {
      this.setState({
        isActive: 1,
        startScopeItemsId: 1,
        endScopeItemsId: 4,
      });
    } else {
      this.setState({
        ...this.state,
        isActive: this.state.isActive + 1,
        startScopeItemsId: this.state.startScopeItemsId + 1,
        endScopeItemsId: this.state.endScopeItemsId + 1,
      });
    }
  };

  render() {
    debugger;
    return (
      <div className={classList.container}>
        <div className={classList.container__main}>
          <h3>Наши клиенты</h3>
          <h1>С нами работают</h1>
          <div className={classList.container__slider}>
            {this.state.slides
              .filter(
                (el) =>
                  el.id >= this.state.startScopeItemsId &&
                  el.id <= this.state.endScopeItemsId
              )
              .map((el) => (
                <img key={el.id} src={el.img} alt={el.alt} />
              ))}
          </div>
        </div>
        <ClientSlider
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

export default Clients;
