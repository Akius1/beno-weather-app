import * as actionTypes from "../constant";

const INITIAL_STATE = {
  selected_capital: ["Abuja"],
  countries_capital: [],
};

const selectedCapitalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_SELECTED:
      const item = state.selected_capital.find((capital) => {
        return capital === action.payload.city;
      });

      return {
        ...state,
        selected_capital: item
          ? [...state.selected_capital]
          : [...state.selected_capital, action.payload.city],
      };
    
    default:
      return state;
  }
};

export default selectedCapitalReducer;
