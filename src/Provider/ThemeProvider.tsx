import { ReactNode, useState } from "react";
import { Theme, ThemeContext } from "../context/ThemeContext";
import { changeCSSRootVariables } from "../model/ChangeCSSRootVariables";
import { Storage } from "../model/Storage";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(
    Storage.getItem("theme") || Theme.LiGHT
  );
  changeCSSRootVariables(theme);
  function changeTheme(theme: Theme) {
    Storage.setItem("theme", theme);
    setTheme(theme);
    changeCSSRootVariables(theme);
  }
  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};
