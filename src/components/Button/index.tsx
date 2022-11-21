import * as React from "react";
import styled from "@emotion/styled";

/* CSS */
// .button-80 {
//   background: #fff;
//   backface-visibility: hidden;
//   border-radius: .375rem;
//   border-style: solid;
//   border-width: .125rem;
//   box-sizing: border-box;
//   color: #212121;
//   cursor: pointer;
//   display: inline-block;
//   font-family: Circular,Helvetica,sans-serif;
//   font-size: 1.125rem;
//   font-weight: 700;
//   letter-spacing: -.01em;
//   line-height: 1.3;
//   padding: .875rem 1.125rem;
//   position: relative;
//   text-align: left;
//   text-decoration: none;
//   transform: translateZ(0) scale(1);
//   transition: transform .2s;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
// }

// .button-80:not(:disabled):hover {
//   transform: scale(1.05);
// }

// .button-80:not(:disabled):hover:active {
//   transform: scale(1.05) translateY(.125rem);
// }

// .button-80:focus {
//   outline: 0 solid transparent;
// }

// .button-80:focus:before {
//   content: "";
//   left: calc(-1*.375rem);
//   pointer-events: none;
//   position: absolute;
//   top: calc(-1*.375rem);
//   transition: border-radius;
//   user-select: none;
// }

// .button-80:focus:not(:focus-visible) {
//   outline: 0 solid transparent;
// }

// .button-80:focus:not(:focus-visible):before {
//   border-width: 0;
// }

// .button-80:not(:disabled):active {
//   transform: translateY(.125rem);
// }

// const Button = styled.button<{
//   fontSize?: string | number;
// }>(
//   {
//     padding: "0.5rem 2rem",
//     color: "darkorchid",
//   },
//   (props) => ({
//     fontSize: props.fontSize,
//   })
// );

// export default Button;

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

    "&:disabled": {
      color: "#787878",
      cursor: "auto",
    },
  },
  (props) => ({
    ...(props.variant === "outlined" && {
      background: "#fff",
      borderRadius: ".375rem",
      borderStyle: "solid",
      borderWidth: ".125rem",
      color: "#212121",

      "&:not(:disabled):hover:active": {
        transform: "scale(1.05) translateY(.125rem)",
      },
      "&:focus": {
        outline: "0 solid transparent",
      },
      "&:focus:before": {
        content: '""',
        left: "calc(-1*.375rem)",
        pointerEvents: "none",
        position: "absolute",
        top: "calc(-1*.375rem)",
        transition: "border-radius",
        userSelect: "none",
      },
      "&:focus:not(:focus-visible)": {
        outline: "0 solid transparent",
      },
      "&:focus:not(:focus-visible):before": {
        borderWidth: 0,
      },
      "&:not(:disabled):active": {
        transform: "translateY(.125rem)",
      },
    }),
    ...(props.variant === "filled" && {
      background: "#332cf2",
      border: 0,
      borderRadius: ".375rem",
      color: "#ffffff",
      //   "&:not(:disabled):hover": {
      //     transform: "scale(1.05)",
      //   },
      "&:not(:disabled):hover:active": {
        transform: "scale(1.05) translateY(.125rem)",
      },
      "&:focus": { outline: " 0 solid transparent" },
      "&:focus:before": {
        borderWidth: ".125rem",
        content: "''",
        left: "calc(-1*.375rem)",
        pointerEvents: "none",
        position: "absolute",
        top: "calc(-1*.375rem)",
        transition: "borderRadius",
        userSelect: "none",
      },
      "&:focus:not(:focus-visible)": { outline: "0 solid transparent" },
      "&:not(:disabled):active": { transform: "translateY(.125rem)" },
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
