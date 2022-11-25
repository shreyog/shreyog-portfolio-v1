import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "@emotion/styled";

import Home from "@/layouts/Home";
import Button from "@/components/Button";

const Main = styled.main({}, (props) => ({
  height: "100vh",
  backgroundColor: props.theme.main.primary,
}));

const Section = styled.section({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "600px",
  margin: "auto",
});

const TextH3 = styled.h1({ textAlign: "center" }, (props) => ({
  color: props.theme.text.primary,
}));

const DesignSystemPage: React.FC<PageProps> = () => {
  return (
    <Home>
      <Main>
        <Section>
          <TextH3>😎 Components 🚀</TextH3>
          <Button variant="outlined">outlined</Button>
          <Button variant="filled">filled</Button>
        </Section>
      </Main>
    </Home>
  );
};

export default DesignSystemPage;

export const DesignSystem: HeadFC = () => <title>Design System Page</title>;
