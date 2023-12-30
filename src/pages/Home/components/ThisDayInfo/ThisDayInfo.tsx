import React from "react";
import style from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/Cloud image.png";
import ThisDayItem from "./ThisDayItem";
import { useSelector } from "react-redux";
import { WeatherState } from "../../../../store/WeatherReducer";

type Props = {};
export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

function getWind(name: string): string {
  const wind: { [key: string]: string } = {
    N: "Север ",
    NNE: "Северо-Северо-Восток ",
    NE: "Северо-Восток ",
    ENE: "Востоко-Северо-Восток ",
    E: "Восток ",
    ESE: "Востоко-Юго-Восток",
    SE: "Юго-Восток ",
    SSE: "Юго-Юго-Восток ",
    S: "Юг ",
    SSW: "Юго-Юго-Запад ",
    SW: "Юго-Запад ",
    WSW: "Западо-Юго-Запад ",
    W: "Запад",
    WNW: "Западо-Северо-Запад ",
    NW: "Северо-Запад",
    NNW: "Северо-Северо-Запад ",
  };

  return wind[name];
}
const ThisDayInfo = (props: Props) => {
  const current = useSelector((state: WeatherState) => state.weather.weather);
  console.log("ccurrent", current);

  const items = [
    {
      icon_id: "temp",
      name: "Temperature",
      value: `${
        current && current.current && current.current.temp_c
      } Feels like ${
        current && current.current && current.current.feelslike_c
      }`,
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: `${
        current && current.current && current.current.pressure_mb * 0.75
      } mm Mercury column`,
    },
    {
      icon_id: "precipitation",
      name: "Precipitation",
      value: `${current && current.current && current.current.precip_mm} mm`,
    },
    {
      icon_id: "wind",
      name: "Wind",
      value: `${current && current.current && current.current.wind_kph} km/h ${
        current &&
        current.current &&
        `Направление ветра:  ${getWind(current.current.wind_dir)}`
      }`,
    },
  ];
  return (
    <div className={style.this_day_info}>
      <div className={style.this_day_info_items}>
        {items.map((item: Item) => {
          return <ThisDayItem key={item.icon_id} item={item} />;
        })}
      </div>
      <img className={style.cloud_img} src={cloud} alt="obl" />
    </div>
  );
};

export default ThisDayInfo;
