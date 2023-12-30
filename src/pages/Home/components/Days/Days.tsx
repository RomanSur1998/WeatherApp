import React from "react";
import styles from "./Days.module.scss";
import Cards from "./Cards";
import Tabs from "./Tabs";
import { useSelector } from "react-redux";
import { WeatherState } from "../../../../store/WeatherReducer";

type Props = {};

export interface Day_weather {
  astro: string;
  date: string;
  date_epoch: number;
  day: any;
  hour: number;
}

const Days = (props: Props) => {
  const days_weather = useSelector(
    (state: WeatherState) => state.weather.weather.forecast?.forecastday
  );

  return (
    <>
      <Tabs />
      <div className={styles.days}>
        {days_weather?.map((day: Day_weather) => {
          return <Cards key={day.date_epoch} day={day} />;
        })}
      </div>
    </>
  );
};

export default Days;
