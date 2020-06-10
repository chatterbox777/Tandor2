import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import HeaderSlider from "./Components/HeaderSlider/HeaderSlider";
import Services from "./Components/Services/Services";
import AboutUs from "./Components/AboutUs/AboutUs";
import Clients from "./Components/Clients/Clients";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <HeaderSlider />
          <Services />
          <AboutUs />
          <Clients />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
