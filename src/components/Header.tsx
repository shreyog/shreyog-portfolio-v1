import * as React from "react";

import styled from "@emotion/styled";

import DarkToggle from "@/components/DarkToggle";

const HeaderWrapper = styled.header({
  display: "flex",
  padding: "1rem",
  justifyContent: "flex-end",
});

const Header = () => {
  return (
    <HeaderWrapper>
      <DarkToggle />
    </HeaderWrapper>
  );
};

export default Header;
