import * as React from "react";

import styled from "@emotion/styled";

import Header from "@/components/Header";

const BodyWrapper = styled.div({
  margin: `0 auto`,
  maxWidth: 960,
  padding: `0 1.0875rem 1.45rem`,
});

const Home = ({ children }: { children: React.ReactNode }) => {

  return (
    <React.Fragment>
      <Header />
      <BodyWrapper>{children}</BodyWrapper>
    </React.Fragment>
  );
};

export default Home;
