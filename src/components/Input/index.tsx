import * as React from "react";
import styled from "@emotion/styled";

const Input = styled.input<InputProps>(
  {
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
    paddingLeft: "12px",
  },
  (props) => ({
    color: props.theme.text.primary,
    background: props.theme.main.primary,
    "&::placeholder": {
      color: props.theme.text.primary,
    },
    "&:focus": {
      border: `3px solid ${props.theme.highlight.primary}`,
      outline: `1px solid ${props.theme.highlight.primary}`,
    },
  })
);

export interface InputProps {
  placeholder: string;
}

export default (props: InputProps): JSX.Element => {
  return <Input {...props} />;
};
