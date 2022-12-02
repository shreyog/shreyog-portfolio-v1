import * as React from "react";
import styled from "@emotion/styled";

const Input = styled.input<InputProps>({
  border: "3px solid #000",
  borderRadius: "5px",
  height: "50px",
  lineHeight: "normal",
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  userSelect: "auto",
  fontSize: "1rem",
  padding: "0 6px",
  color: "var(--clr-text-main)",
  background: "var(--clr-background-main)",
  "&::placeholder": {
    color: "var(--clr-text-alt)",
  },
  "&:focus": {
    border: `3px solid var(--clr-accent)`,
    outline: `1px solid var(--clr-accent)`,
  },
});

export interface InputProps {
  placeholder?: string;
}

export default (props: InputProps): JSX.Element => {
  return <Input {...props} />;
};
