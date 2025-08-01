import React, { createContext, useContext } from "react";

export const Themecontext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeProvider = Themecontext.Provider;

export default function useTheme() {
  return useContext(Themecontext);
}
