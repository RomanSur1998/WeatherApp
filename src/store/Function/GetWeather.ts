import axios from "axios";
import { GET_WEATHER_DATA } from "../WeatherReducer";
import { API_KEY } from "../../consts/Consts";

export async function getWeather(dispatch: any, city: string) {
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );

    dispatch({ type: GET_WEATHER_DATA, payload: response.data });
  } catch (error) {
    console.log("error", error);
  }
}
