import * as React from "react";
import styled from "@emotion/styled";

// display: inline-block;
// outline: 0;
// border: 0;
// cursor: pointer;
// background: #000000;
// color: #FFFFFF;
// border-radius: 8px;
// padding: 14px 24px 16px;
// font-size: 18px;
// font-weight: 700;
// line-height: 1;
// transition: transform 200ms,background 200ms;
// :hover{
//     transform: translateY(-2px);
// }

export const btnStyles = {
  display: "inline-block",
  padding: ".875rem 1.125rem",
  position: "relative",
  cursor: "pointer",
  backfaceVisibility: "hidden",
  textAlign: "left",
  textDecoration: "none",
  transform: "translateZ(0) scale(1)",
  transition: "transform .2s",
  userSelect: "none",
  "-webkit-user-select": "none",
  touchAction: "manipulation",
  fontSize: "1.125rem",
  fontWeight: 700,
  letterSpacing: "-.01em",
  lineHeight: "1.3",
};

const Button = styled.button<ButtonProps>(
  {
    display: "inline-block",
    outline: 0,
    border: 0,
    cursor: "pointer",
    borderRadius: "8px",
    padding: "0.875rem 1.5rem 1rem",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: 1,
    transition: "transform 200ms,background 200ms",
    "&:hover": {
      transform: "translateY(-2px)",
    },
  },
  (props) => ({
    ...(props.variant === "filled" && {
      background: props.theme.highlight.primary,
      color: props.theme.text.primary,
    }),
    ...(props.variant === "outlined" && {
      background: "transparent",
      color: props.theme.highlight.primary,
      boxShadow: `0 0 0 3px ${props.theme.highlight.primary} inset`,
    }),
  })
);

export interface ButtonProps {
  className?: string;
  children?: JSX.Element | string;
  variant?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default (props: ButtonProps): JSX.Element => {
  return (
    <Button
      variant={props.variant}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </Button>
  );
};
