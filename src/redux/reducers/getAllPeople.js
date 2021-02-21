const getAllPeopleReducer = (state = [], action) => {
  switch(action.type) {
    case "ALL_PEOPLE":
      return {
        ...action.payload,
      }
    default: {
      return state
    }
  }
}

export default getAllPeopleReducer;