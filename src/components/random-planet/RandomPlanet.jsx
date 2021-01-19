import React, { useState } from "react";

import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

import Spinner from "../spinner/Spinner";
import PlanetView from "./PlanetView";


import "./RandomPlanet.css";

const RandomPlanet = () => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  React.useEffect(() => {
    const swapiService = new SwapiService();

    const onPlanetLoaded = (planet) => {
      setState(planet);
      setLoading(false);
    };

    const onError = () => {
      setLoading(false);
      setError(true);
    }

    const updatePlanet = (id) => {
      swapiService.getPlanet(id)
        .then(onPlanetLoaded)
        .catch(onError);
    };

    const interval = setInterval(() => {
      const idPlanet = Math.floor(Math.random() * 25) + 2;
      updatePlanet(idPlanet);
    }, 5000)

    return () => {
      clearInterval(interval);
    }

  }, []);

  const hasData = !(loading || error)

  const spinner = loading ? <Spinner /> : null;
  const content = hasData ? <PlanetView planet={state} /> : null;
  const errorMessage = error ? <ErrorIndicator /> : null;

  return (
    <div className="random-planet jumbotron rounded">
      {spinner}
      {content}
      {errorMessage}
    </div>
  );
};

export default RandomPlanet;
