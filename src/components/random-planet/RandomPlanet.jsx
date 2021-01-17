import React from 'react';

import SwapiService from '../../services/swapi-service';

import './RandomPlanet.css';

const RandomPlanet = () => {

  const [state, setState] = React.useState({});

  React.useEffect(() => {
    const swapiService = new SwapiService();
    const idPlanet = Math.floor(Math.random() * 25) + 2;

    const onPlanetLoaded = (planet) => {
      setState(planet);
    }

    const updatePlanet = (id) => {
      swapiService.getPlanet(id)
        .then(onPlanetLoaded)
      }

      updatePlanet(idPlanet);
  }, [])

    const {id, name, population, rotationPeriod, diameter} = state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
}

export default RandomPlanet;
