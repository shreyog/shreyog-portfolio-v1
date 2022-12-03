import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "@emotion/styled";

import HomeLayout from "@/layouts/HomeLayout";
import Button from "@/components/Button";
import Input from "@/components/Input";

const Main = styled.main({
  minHeight: "100vh",
  height: "100%",
  maxWidth: "700px",
  margin: "auto",
  backgroundColor: "var(--clr-background-main)",
});

const Section = styled.section({
  paddingBlockEnd: "1.5rem",
});

const ComponentSectionWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const Hr = styled.hr({ marginBottom: "1.5rem", marginTop: "0.7rem" });

const PaletteContainer = styled.div({
  display: "flex",
});

const Color = styled.div({
  display: "inline-flex",
  border: "2px solid #000000",
  borderRadius: "50%",
  height: "70px",
  width: "70px",
  marginRight: "1rem",
});

const DesignSystemPage: React.FC<PageProps> = () => {
  return (
    <HomeLayout>
      <Main>
        <Section>
          <p className="fv-subtitle fw-medium text-accent">Palette</p>
          <Hr />
          <PaletteContainer>
            <Color
              style={{ backgroundColor: "var(--clr-background-main)" }}
            ></Color>
            <Color
              style={{ backgroundColor: "var(--clr-background-alt)" }}
            ></Color>
            <Color style={{ backgroundColor: "var(--clr-text-main)" }}></Color>
            <Color style={{ backgroundColor: "var(--clr-text-alt)" }}></Color>
            <Color style={{ backgroundColor: "var(--clr-accent)" }}></Color>
          </PaletteContainer>
        </Section>
        <Section>
          <p className="fv-subtitle fw-medium text-accent">Typography</p>
          <Hr />
          <h1 className="fv-h1">The quick brown fox jumps over the lazy dog</h1>
          <h2 className="fv-h2">The quick brown fox jumps over the lazy dog</h2>
          <h3 className="fv-h3">The quick brown fox jumps over the lazy dog</h3>
          <h4 className="fv-h4">The quick brown fox jumps over the lazy dog</h4>
          <h5 className="fv-h5">The quick brown fox jumps over the lazy dog</h5>
          <h6 className="fv-h6">The quick brown fox jumps over the lazy dog</h6>
          <h6 className="fv-subtitle">
            The quick brown fox jumps over the lazy dog
          </h6>
          <p className="fv-p">The quick brown fox jumps over the lazy dog</p>
        </Section>

        <Section>
          <p className="fv-subtitle fw-medium text-accent">Components</p>
          <Hr />
          <ComponentSectionWrapper>
            <Button variant="outlined">outlined</Button>
            <Button variant="filled">filled</Button>
            <Input placeholder={"Input"} />
          </ComponentSectionWrapper>
        </Section>
      </Main>
    </HomeLayout>
  );
};

export default DesignSystemPage;

export const Head: HeadFC = () => <title>Design System</title>;
