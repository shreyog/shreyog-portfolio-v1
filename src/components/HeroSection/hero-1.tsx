import * as React from "react";
import styled from "@emotion/styled";

const HeroWrapper = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr repeat(12, minmax(min-content, 6rem)) 1fr",
  position: "relative",
});

const Hero = styled.div({
  marginTop: "20rem",
  gridColumnStart: 2,
  gridColumnEnd: 14,
  padding: "0 6rem",
});

const Hero1 = () => {
  return (
    <HeroWrapper>
      <Hero>
        <h1 className="fv-h1">
          turning ideas into
          <br />
          real life products
          <br />
          is my calling.
        </h1>
      </Hero>
    </HeroWrapper>
  );
};

export default Hero1;
