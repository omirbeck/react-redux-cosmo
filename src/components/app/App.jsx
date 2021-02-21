import React, { useState } from "react";
import SwapiService from "../../services/swapi-service";
import Header from "../header/Header";
import RandomPlanet from "../random-planet/RandomPlanet";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi-service";

import "./App.css";

const App = ({ children }) => {
  const [swapiService, setSwapiService] = useState(new SwapiService())

  const onServiceChange = () => {
    const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
    setSwapiService(new Service());
  }

  return (
    <SwapiServiceProvider value={swapiService}>
      <div className="app-wrapper">
        <Header onServiceChange={onServiceChange} />
        <RandomPlanet />
        {children}
      </div>
    </SwapiServiceProvider>
  );
};

export default App;
