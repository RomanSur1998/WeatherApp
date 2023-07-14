import React from "react";
import style from "./ThisDayInfo.module.scss";

import { IndicatorSvgSelector } from "../../../../assets/icons/indicator/IndicatorSvgSelector";
import { Item } from "./ThisDayInfo";
import { useSelector } from "react-redux";
import { WeatherState } from "../../../../store/WeatherReducer";

interface Props {
  item: Item;
}

const ThisDayItem = ({ item }: Props) => {
  const { icon_id, value, name } = item;
  return (
    <div className={style.item}>
      <div className={style.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={style.indicator_name}>{name}</div>
      <div className={style.indicator_value}>{value} </div>
    </div>
  );
};

export default ThisDayItem;
