
export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
  
    if (!res.ok) {
      throw new Error (`Could not fetch ${url}`)
    }
  
    const data = await res.json();
    return data;
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`)
    return res.results;
  }

  getPerson = async (id) => {
    const res = await this.getResource(`/people/${id}`)
    return res;
  }

  getAllPlanet = async () => {
    const res = await this.getResource(`/planet/`)
    return res.results;
  }

  getPlanet = async (id) => {
    const res = await this.getResource(`/planet/${id}`)
    return res;
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`)
    return res.results;
  }

  getStarships = async (id) => {
    const res = await this.getResource(`/starships/${id}`)
    return res;
  }
}
