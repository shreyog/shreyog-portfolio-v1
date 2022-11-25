import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

const theme = {
  dark: {
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
  },
  light: {
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
  },
};

const Main = styled.main(
  {
    height: "100vh",
    padding: "0 14rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    dap: "1rem",
    fontFamily: "Source Sans Pro",
  },
  (props) => ({
    backgroundColor: `${props.theme.main.primary}`,
  })
);

const CustomBtn = styled.button(
  {
    padding: "14px 28px",
    cursor: "pointer",
    fontSize: "1rem",
    transitionDuration: "0.2s",
    transitionProperty: "background-color, color",
    border: 0,
  },
  (props) => ({
    backgroundColor: `${props.theme.highlight.primary}`,
    color: `${
      props.theme.mode === "dark"
        ? props.theme.text.primary
        : props.theme.main.primary
    }`,
  })
);

const Section = styled.section<{ color: string }>(
  { margin: "2rem 0", padding: "2rem" },
  (props) => ({
    backgroundColor:
      props.color === "primary"
        ? props.theme.main.primary
        : props.theme.main.secondary,
  })
);

const TextH1 = styled.h1({}, (props) => ({ color: props.theme.text.primary }));
const TextP = styled.p({}, (props) => ({ color: props.theme.text.secondary }));

const ToggleTheme = () => {
  const [isDark, setIsDark] = React.useState(false);
  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      <Main>
        <Section color="primary">
          <TextH1>Hello {isDark ? "Dark" : "Light"} Mode</TextH1>
          <TextP>We will make some magic happen!</TextP>
        </Section>

        <Section color="secondary">
          <TextH1>Hello {isDark ? "Dark" : "Light"} Mode</TextH1>
          <TextP>We will make some magic happen!</TextP>
        </Section>

        <CustomBtn
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          Change to {isDark ? "light" : "dark"} mode
        </CustomBtn>
      </Main>
    </ThemeProvider>
  );
};

export default ToggleTheme;
