import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "@emotion/styled";

import HomeLayout from "@/layouts/HomeLayout";
import Button from "@/components/Button";
import Input from "@/components/Input";

const Main = styled.main({
  height: "100vh",
  backgroundColor: "var(--clr-background-main)",
});

const Section = styled.section({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "600px",
  margin: "auto",
});

const TextH3 = styled.h1({
  textAlign: "center",
  color: "var(--clr-text-main)",
});

const DesignSystemPage: React.FC<PageProps> = () => {
  return (
    <HomeLayout>
      <Main>
        <Section>
          <TextH3>😎 Components 🚀</TextH3>
          <Button variant="outlined">outlined</Button>
          <Button variant="filled">filled</Button>
          <Input placeholder={"Input"} />
        </Section>
      </Main>
    </HomeLayout>
  );
};

export default DesignSystemPage;

export const DesignSystem: HeadFC = () => <title>Design System Page</title>;
