export default class SwapiService {
  _apiBase = "https://swapi.dev/api";
  _imageBase = "https://starwars-visualguide.com/assets/img";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }

    const data = await res.json();
    return data;
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);

    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const res = await this.getResource(`/people/${id}/`);
    return this._transformPerson(res);
  };
  
  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  };
  
  getPlanet = async (id) => {
    const res = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(res);
  };
  
  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  };
  
  getStarship = async (id) => {
    const res = await this.getResource(`/starships/${id}`);
    return this._transformStarship(res);
  };
  
  getPersonImage = (id) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  }

  getPlanetImage = (id) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  }

  getStarshipImage = (id) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    const id = this._extractId(planet);

    return {
      id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  }
}
