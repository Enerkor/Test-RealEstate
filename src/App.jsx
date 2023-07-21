import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contacts from "./components/Contacts/Contacts";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contacts />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
