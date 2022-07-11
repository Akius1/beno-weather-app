
import * as actionTypes from "./constant";
import { weatherConstants, namespace } from "./constant";
import { weatherService } from "./service";

export const addCapitalToStore = (city) => {
  return {
    type: actionTypes.ADD_TO_SELECTED,
    payload: {
      city: city,
    },
  };
};


export const getCountryCapitalWeather = (params, keys) => {
    let url = weatherService.getWeather;
    return (dispatch) => {
     url(params, keys)
        .then((response) => {
          if (response && response.data) {
            const responseData = response.data
            dispatch(success(responseData));
          }
        // console.log('response from api',response)
        })
        .catch((error) => {
          dispatch(failure(error));
        });
    };
    function success(response) {
      return { type:  weatherConstants[`GET_${namespace}_SUCCESS`], response };
    }
    function failure(error) {
      if (error && error.response) {
        const data = error.response.data;
        return {
          type:  weatherConstants[`GET_${namespace}_FAILURE`],
          error: data.message,
        };
      }
      return {
        type:  weatherConstants[`GET_${namespace}_FAILURE`],
        error: [
          {
            name: 'Network Error',
            message: 'Please check your internet connection',
          },
        ],
      };
    }
  };
