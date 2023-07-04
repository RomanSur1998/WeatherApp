import React from "react";
import styles from "./Popup.module.scss";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import GlobalSvgselector from "../../assets/icons/global/GlobalSvgselector";

type Props = {
  //   items: Item[];
};

const Popup = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
        <div className={styles.day}>
          <div className={styles.day_temp}>20</div>
          <div className={styles.day_name}>Среда </div>
          <div className={styles.img}>
            <GlobalSvgselector id="rain" />
          </div>
          <div className={styles.day_time}>
            Время:<span>21:22</span>
          </div>
          <div className={styles.day_city}>
            Город: <span>Бишкек</span>{" "}
          </div>
        </div>
        <div className={styles.this_day_info_items}>
          {items.map((item: Item) => {
            return <ThisDayItem key={item.icon_id} item={item} />;
          })}
        </div>
        <div className={styles.close}>
          <GlobalSvgselector id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
