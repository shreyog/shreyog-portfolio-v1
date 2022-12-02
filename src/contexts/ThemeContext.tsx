import * as React from "react";

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
  cssColorVariableGenerator,
} from "@/constants/styles";

export type ThemeContextType = {
  colorMode: string | undefined;
  setColorMode: (newValue: string) => void;
};

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, rawSetColorMode] = React.useState<string | undefined>(
    undefined
  );

  React.useEffect(() => {
    const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    );

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue: ThemeContextType = React.useMemo(() => {
    function setColorMode(colorMode: string) {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, colorMode);
      root.style.setProperty(INITIAL_COLOR_MODE_CSS_PROP, colorMode);

      const THEME_COLORS = COLORS[colorMode as keyof {}];

      if (THEME_COLORS) {
        const { cssVarNames, objectAccessors } =
          cssColorVariableGenerator(THEME_COLORS);

        cssVarNames.forEach((entry, index) => {
          const nestedAccess = objectAccessors[index as keyof {}];
          const value = nestedAccess
            .split(".")
            .reduce(
              (prev: any, cur: string) => prev[cur as keyof {}],
              THEME_COLORS
            );
          root.style.setProperty(entry, value);
        });
      }

      rawSetColorMode(colorMode);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
