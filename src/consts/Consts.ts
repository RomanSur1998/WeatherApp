import { useSelector } from "react-redux";
import { LocationState } from "../store/LoactionReducer";

export const getAPIUrl = (city: string) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`;

export const API_KEY = "50cde8b11b3a4d6189570301230807";
