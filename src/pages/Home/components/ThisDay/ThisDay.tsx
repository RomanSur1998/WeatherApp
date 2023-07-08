import React from "react";
import styles from "./Thisday.module.scss";
import GlobalSvgselector from "../../../../assets/icons/global/GlobalSvgselector";
import { useSelector } from "react-redux";
import { WeatherState } from "../../../../store/WeatherReducer";

type Props = {};

const ThisDay = (props: Props) => {
  const current = useSelector((state: WeatherState) => state.weather.weather);
  return (
    <div className={styles.this_day}>
      <div className={styles.top_block}>
        <div className={styles.top_block_wrapper}>
          {current &&
          current.current &&
          current.current.temp_c !== undefined ? (
            <div className={styles.this_temp}>
              {current.current.temp_c}&#176;
            </div>
          ) : (
            <div className={styles.this_temp}>20 &#176;</div>
          )}

          <div className={styles.this_day_name}>Today </div>
        </div>
        <GlobalSvgselector id="sun" />
      </div>
      <div className={styles.bottom_block}>
        <div className={styles.this_time}>
          Time:{" "}
          <span>
            {current && current.location && current.location.localtime}
          </span>
        </div>
        <div className={styles.this_city}>
          City:{" "}
          <span>{current && current.location && current.location.name}</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
