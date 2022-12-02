import * as React from "react";
import styled from "@emotion/styled";

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
      background: "var(--clr-accent)",
      color: "#fffffe",
    }),
    ...(props.variant === "outlined" && {
      background: "transparent",
      color: "var(--clr-accent)",
      boxShadow: `0 0 0 3px var(--clr-accent) inset`,
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
