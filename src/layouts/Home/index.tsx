import * as React from "react";
import { ThemeProvider, Global, css } from "@emotion/react";
import "normalize.css";

import { themeGenerator } from "@/styles/theme";
import { THEME_MODES } from "@/constants/themeModes";

const Home = ({ children }: { children: React.ReactNode }) => {
  const theme = themeGenerator(THEME_MODES.DARK);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            body {
              font-family: ${theme.fonts.fontFamily};
            }
          `}
        />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Home;
