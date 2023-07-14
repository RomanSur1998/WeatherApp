import React from "react";
import styles from "./Days.module.scss";

type Props = {};
export interface Tab {
  value: string;
}

const Tabs = (props: Props) => {
  const tabs: Tab[] = [
    {
      value: "На неделю",
    },
    // {
    //   value: "На 10 дней",
    // },
    // {
    //   value: "На месяц",
    // },
  ];
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <div className={styles.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      {/* <div className={styles.cancel}>Отменить</div> */}
    </div>
  );
};

export default Tabs;
