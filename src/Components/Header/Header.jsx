import React from "react";
import classlist from "./Header.module.css";
import logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";

const logoClassList = classlist.header__info__item;
const navigateClasslist = classlist.header__info__navigation;
const logoPhone = logoClassList + " " + classlist.header__info__logoPhone;
const logoClock = logoClassList + " " + classlist.header__info__logoClock;
const logoLetter = logoClassList + " " + classlist.header__info__logoLetter;
const logoPlaceholder =
  logoClassList + " " + classlist.header__info__logoPlaceholder;

class Header extends React.Component {
  state = {
    phoneNumber: "8(111)222-33-44",
    workTime: "Пн-Пт 10:00 - 18:00",
    workMail: "order@buhone.ru",
    workAddress: "Невский пр.130",
  };
  render() {
    return (
      <div className={classlist.header__container}>
        <header className={classlist.header}>
          <div className={classlist.header__companyName}>
            <img src={logo} alt="BuhOne" />
            <span>BuhOne</span>
          </div>
          <div className={classlist.header__main__info}>
            <div className={classlist.header__info}>
              <ul className={classlist.header__info__items}>
                <li className={logoPhone}>
                  <Link to="/Phone">{this.state.phoneNumber}</Link>
                </li>
                <li className={logoClock}>{this.state.workTime}</li>
                <li className={logoLetter}>{this.state.workMail}</li>
                <li className={logoPlaceholder}>{this.state.workAddress}</li>
              </ul>
            </div>
            <div className={classlist.header__info__navigation}>
              <ul className={classlist.header__info__items}>
                <li className={navigateClasslist}>
                  {" "}
                  <Link to="/">Главная</Link>
                </li>
                <li className={navigateClasslist}>
                  <Link to="/services">Услуги</Link>
                </li>
                <li className={navigateClasslist}>
                  <Link to="/cases">Кейсы</Link>
                </li>
                <li className={navigateClasslist}>
                  <Link to="/aboutCompany">О Компании</Link>
                </li>
                <li className={navigateClasslist}>
                  <Link to="/contacts">Контакты</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
