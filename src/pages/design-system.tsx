import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ThemeProvider } from "@emotion/react";

import Button from "../components/Button";
import theme from "../styles/theme";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const DesignSystemPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <main
        style={{
          fontFamily: "Source Sans Pro",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "600px",
          margin: "auto",
        }}
      >
        <h3 style={{ textAlign: "center" }}>😎 Components 🚀</h3>
        <Button variant="outlined">outlined</Button>
        <Button variant="filled">filled</Button>
      </main>
    </ThemeProvider>
  );
};

export default DesignSystemPage;

export const DesignSystem: HeadFC = () => <title>Design System Page</title>;
