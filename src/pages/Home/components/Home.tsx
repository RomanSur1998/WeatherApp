import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDayInfo/ThisDayInfo";
import Days from "./Days/Days";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_CITY,
  GET_LOACTION,
  LocationState,
} from "../../../store/LoactionReducer";
import axios from "axios";
import { getAPIUrl } from "../../../consts/Consts";
import { GET_WEATHER_DATA, WeatherState } from "../../../store/WeatherReducer";
// import { API } from "../../../consts/Consts";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();
  const city = useSelector((state: LocationState) => state.location.city);
  const location = useSelector(
    (state: LocationState) => state.location.location
  );

  const weather = useSelector((state: WeatherState) => state.weather.weather);
  console.log(weather);

  console.log("location", location);

  async function getLoaction() {
    try {
      const response = await axios.get(getAPIUrl(city));
      dispatch({ type: GET_LOACTION, payload: response.data[0] });
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getLoaction();
  }, [city]);

  async function getWeather() {
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=2ec15d2ac9856ec17f6d3b07aabfd05b`
    );

    dispatch({ type: GET_WEATHER_DATA, payload: response });
    try {
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};

export default Home;
