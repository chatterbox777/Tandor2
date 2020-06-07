import React from "react";
import classList from "./Services.module.css";

class Services extends React.Component {
  state = {};
  render() {
    return (
      <div className={classList.container}>
        <div className={classList.container__text}>
          <h3>Наши услуги</h3>
          <h1>Мы специализируемся</h1>
        </div>

        <div className={classList.main}>
          <div className={classList.main__block}>
            <p>Бухгалтерское обслуживание</p>
          </div>
          <div className={classList.main__block}>
            <p>Бухгалтерское обслуживание</p>
          </div>
          <div className={classList.main__block}>
            <p>Бухгалтерское обслуживание</p>
          </div>
          <div className={classList.main__block}>
            <p>Бухгалтерское обслуживание</p>
          </div>
          <div className={classList.main__block}>
            <p>Бухгалтерское обслуживание</p>
          </div>
          <div className={classList.main__block}>
            <p>Бухгалтерское обслуживание</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
