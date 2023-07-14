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

const ThisDayInfo = (props: Props) => {
  const current = useSelector((state: WeatherState) => state.weather.weather);
  console.log("ccurrent", current);

  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${
        current && current.current && current.current.temp_c
      } Ощущаеться как ${
        current && current.current && current.current.feelslike_c
      }`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${
        current && current.current && current.current.pressure_mb * 0.75
      } mm Ртутного столба`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: `${current && current.current && current.current.precip_mm} mm`,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${current && current.current && current.current.wind_kph} км/ч ${
        current && current.current && current.current.wind_dir
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
