import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import GlobalSvgselector from "../../assets/icons/global/GlobalSvgselector";
import Select from "react-select";
import SingleValue from "react-select/dist/declarations/src/components/SingleValue";
import { useTheme } from "../../hooks/UseTheme";
import { Theme } from "../../context/ThemeContext";
import { useSelector } from "react-redux";
import { CHANGE_CITY, LocationState } from "../../store/LoactionReducer";
import { useDispatch } from "react-redux";
import { ActionMeta } from "react-select";

type Props = {};

const Header = (props: Props) => {
  const city = useSelector((state: LocationState) => state.location.city);
  console.log("city", city);

  const dispatch = useDispatch();
  const theme = useTheme();
  const options = [
    { value: "Moscow", label: "Moscow" },
    { value: "Rome", label: "Rome" },
    { value: "London", label: "London" },
    { value: "Bishkek", label: "Bishkek" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? " #4F4F4F" : "rgba(71, 147,255,0,2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  //* функция для изменения значения города
  function handleChangeCity(cityname: string) {
    dispatch({ type: CHANGE_CITY, payload: cityname });
  }

  const changeTheme = () => {
    const newTheme = theme.theme === "light" ? "dark" : "light";
    theme.changeTheme(theme.theme === Theme.LiGHT ? Theme.DARK : Theme.LiGHT);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgselector id="HeaderLogo" />
        </div>
        <div className={styles.title}>Minimalist Weather</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_color} onClick={changeTheme}>
          <GlobalSvgselector id="ChanhgeColor" />
        </div>
        <Select
          defaultValue={options[0]}
          options={options}
          styles={colorStyles}
          onChange={(selectedOption: any, actionMeta: ActionMeta<any>) => {
            handleChangeCity(selectedOption.value);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
