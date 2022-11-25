import { THEME_MODES } from "@/constants/themeModes";

const DARK_THEME = {
  mode: "dark",
  main: {
    primary: "#16161A",
    secondary: "#242629",
  },
  text: {
    primary: "#FFFFFE",
    secondary: "#94A1B2",
  },
  highlight: {
    primary: "#7F5AF0",
    secondary: "#2CB67D",
  },
};

const LIGHT_THEME = {
  mode: "light",
  main: {
    primary: "#F8F5F2",
    secondary: "#FFFFFE",
  },
  text: {
    primary: "#232323",
    secondary: "#222525",
  },
  highlight: {
    primary: "#F45D48",
    secondary: "#078080",
  },
};

const COMMON_THEME = {
  fonts: {
    fontFamily: "Source Sans Pro",
  },
};

export const themeGenerator = (mode = THEME_MODES.LIGHT) => {
  return {
    ...COMMON_THEME,
    ...(mode === THEME_MODES.LIGHT ? LIGHT_THEME : DARK_THEME),
  };
};
