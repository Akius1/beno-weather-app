import { weatherConstants, namespace } from '../constant';

export const initialState = {
  loading: false,
  success: false,
  response: null,
  error: null,
};

 const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case weatherConstants[`GET_${namespace}_SUCCESS`]:
      return {
        ...state,
        loading: false,
        success: true,
        response: action.response,
        error: null
      };
    case weatherConstants[`GET_${namespace}_FAILURE`]:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default weatherReducer;