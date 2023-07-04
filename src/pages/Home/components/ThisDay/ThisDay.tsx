import React from "react";
import styles from "./Thisday.module.scss";
import GlobalSvgselector from "../../../../assets/icons/global/GlobalSvgselector";

type Props = {};

const ThisDay = (props: Props) => {
  return (
    <div className={styles.this_day}>
      <div className={styles.top_block}>
        <div className={styles.top_block_wrapper}>
          <div className={styles.this_temp}>20</div>
          <div className={styles.this_day_name}>Сегодня </div>
        </div>
        <GlobalSvgselector id="sun" />
      </div>
      <div className={styles.bottom_block}>
        <div className={styles.this_time}>
          Время:<span>21:22</span>
        </div>
        <div className={styles.this_city}>
          Город: <span>Бишкек</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
