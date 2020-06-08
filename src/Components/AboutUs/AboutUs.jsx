import React from "react";
import classList from "./AboutUs.module.css";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className={classList.container}>
      <div className={classList.main}>
        <div className={classList.info}>
          <h3>О нас</h3>
          <h1>
            Компания <span>ИвановПром</span>{" "}
          </h1>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
            без заметных изменений пять веков, но и перешагнул в электронный
            дизайн.
          </p>
        </div>
        <div className={classList.blocks}>
          <div className={classList.block}>
            <h1>90</h1>
            <p>Завершено крупных сделок</p>
            <NavLink to="/Case1" className={classList.block__link}>
              Все кейсы{" "}
            </NavLink>
          </div>
          <div className={classList.block}>
            <h1>90</h1>
            <p>Завершено крупных сделок</p>
            <NavLink to="/Case2" className={classList.block__link}>
              Все кейсы{" "}
            </NavLink>
          </div>
          <div className={classList.block}>
            <h1>90</h1>
            <p>Завершено крупных сделок</p>
            <NavLink to="/Case3" className={classList.block__link}>
              Все кейсы{" "}
            </NavLink>
          </div>
          <div className={classList.block}>
            <h1>90</h1>
            <p>Завершено крупных сделок</p>
            <NavLink to="/Case4" className={classList.block__link}>
              Все кейсы{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
