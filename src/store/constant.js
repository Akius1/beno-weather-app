import { createCRUDConstants } from "../utils/redux.utils";


export const ADD_TO_SELECTED = "ADD_TO_SELECTED";
export const FETCH_COUNTRY_CAPITAL_DETAILS = "FETCH_COUNTRY_CAPITAL_DETAILS";



export const namespace = 'WEATHER';

export const weatherConstants = createCRUDConstants(namespace);