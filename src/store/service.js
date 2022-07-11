import { API_URLS } from "../utils/backendRoutes";
import {apiCall} from "../utils/api.utils";
import environment from '../environment';

export const weatherService = {
  capitals,
  getWeather
}



function capitals(){
    return apiCall("GET",API_URLS.COUNTRIES.getCapitals)
}

function getWeather(query){
    return apiCall("GET",  `${API_URLS.WEATHERDETAILS.getCityDetail}?q=${query}&appid=${environment.apiKey}&units=metric`)
}