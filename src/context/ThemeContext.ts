import React, { createContext } from "react";

interface Props {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}
export enum Theme {
  LiGHT = "light",
  DARK = "dark",
}

export const ThemeContext = createContext<Props>({
  theme: Theme.LiGHT,
  changeTheme: () => {},
});
