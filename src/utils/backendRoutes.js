import environment from '../environment';

const baseUrl = environment.baseUrl;
const capitalUrl = environment.capitalKey;

export const API_URLS = {
 
  COUNTRIES: {
    getCapitals: `${capitalUrl}`,
  },

  WEATHERDETAILS:{
    getCityDetail:`${baseUrl}weather/`,
  },
};
