export const initialState = {
  goal: "",
  age: "",
  height: "",
  feet: "",
  inches: "",
  heightUnit: "CM"
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        ...action.field
      }

    default:
      return state
  }
}

export default user
