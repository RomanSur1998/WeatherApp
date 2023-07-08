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
import { API_KEY, getAPIUrl } from "../../../consts/Consts";
import { GET_WEATHER_DATA, WeatherState } from "../../../store/WeatherReducer";
import { getLoaction } from "../../../store/Function/GetLoaction";
import { getWeather } from "../../../store/Function/GetWeather";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();
  const city = useSelector((state: LocationState) => state.location.city);
  const location = useSelector(
    (state: LocationState) => state.location.location
  );

  const weather = useSelector((state: WeatherState) => state.weather.weather);
  console.log("weather", weather);

  useEffect(() => {
    getWeather(dispatch, city);
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
