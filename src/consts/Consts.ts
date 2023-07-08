import { useSelector } from "react-redux";
import { LocationState } from "../store/LoactionReducer";

export const getAPIUrl = (city: string) =>
  `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=2ec15d2ac9856ec17f6d3b07aabfd05b`;

export const API_KEY = "50cde8b11b3a4d6189570301230807";
