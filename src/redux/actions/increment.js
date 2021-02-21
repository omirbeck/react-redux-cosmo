import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const allpeople = (payload) => {
    return {
      type: "ALL_PEOPLE",
      payload,
  }
}

export const getAllPeopleAction = () => dispatch => {
    swapiService.getAllPeople()
      .then((response) => dispatch(allpeople(response)))
};
