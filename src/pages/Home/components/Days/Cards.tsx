import React from "react";
import styles from "./Days.module.scss";
import { Day_weather } from "./Days";
import GlobalSvgselector from "../../../../assets/icons/global/GlobalSvgselector";

type Props = {
  day: Day_weather;
};

const Cards = ({ day }: Props) => {
  return (
    <div className={styles.card}>
      {/* <div className={styles.day}>{day.day}</div> */}
      <div className={styles.day_info}>{day.date} </div>
      <div className={styles.img}>
        <GlobalSvgselector id={day.day.condition.text} />
      </div>
      <div className={styles.day_temp}>{day.day.avgtemp_c} &#176;</div>
      {/* <div className={styles.temp_night}>{day.day.  }</div> */}
      <div className={styles.info}>{day.day.condition.text}</div>
    </div>
  );
};

export default Cards;
