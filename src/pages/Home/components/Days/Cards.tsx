import React from "react";
import styles from "./Days.module.scss";
import { Day } from "./Days";
import GlobalSvgselector from "../../../../assets/icons/global/GlobalSvgselector";

type Props = {
  day: Day;
};

const Cards = ({ day }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.day}>{day.day}</div>
      <div className={styles.day_info}>{day.day_info}</div>
      <div className={styles.img}>
        <GlobalSvgselector id={day.icon_id} />
      </div>
      <div className={styles.day_temp}>{day.temp_day}</div>
      <div className={styles.temp_night}>{day.temp_night}</div>
      <div className={styles.info}>{day.info}</div>
    </div>
  );
};

export default Cards;
