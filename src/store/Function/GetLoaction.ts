import axios from "axios";

import { getAPIUrl } from "../../consts/Consts";
import {
  GET_LOACTION,
  LocationState,
  getLoacionState,
} from "../LoactionReducer";
import { getWeather } from "./GetWeather";

export async function getLoaction(city: string, dispatch: any) {
  try {
    const response = await axios.get(getAPIUrl(city));

    dispatch(getLoacionState(response.data[0]));
    // getWeather(dispatch);
  } catch (error) {
    console.log("error", error);
  }
}
