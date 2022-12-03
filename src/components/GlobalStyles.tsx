import * as React from "react";
import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        :root {
          font-size: 1rem;
          font-family: "Open Sans";
          font-weight: 400;
          line-height: 1.5;

          --fs-h1: 3rem;
          --fs-h2: 2.625rem;
          --fs-h3: 2.25rem;
          --fs-h4: 1.875rem;
          --fs-h5: 1.5rem;
          --fs-h6: 1.125rem;
          --fs-subtitle: 1.5rem;
          --fs-p: 1rem;

          --lh-h1: 3.375rem;
          --lh-h2: 3rem;
          --lh-h3: 2.625rem;
          --lh-h4: 2.25rem;
          --lh-h5: 1.875rem;
          --lh-h6: 1.625rem;
          --lh-subtitle: 1.875rem;
          --lh-p: 1.375rem;

          --fw-thin: 100;
          --fw-extra-light: 200;
          --fw-light: 300;
          --fw-regular: 400;
          --fw-medium: 500;
          --fw-semi-bold: 600;
          --fw-bold: 700;
          --fw-extra-bold: 800;
          --fw-black: 900;
          --fw-extra-black: 950;
        }

        /* https://piccalil.li/blog/a-modern-css-reset */
        /* Box sizing rules */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        /* Remove default margin */
        * {
          margin: 0;
          padding: 0;
          font: inherit;
        }

        /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
        ul[role="list"],
        ol[role="list"] {
          list-style: none;
        }

        /* Set core root defaults */
        html:focus-within {
          scroll-behavior: smooth;
        }

        html,
        body {
          height: 100%;
        }

        /* Set core body defaults */
        body {
          text-rendering: optimizeSpeed;
          line-height: 1.5;
          background: var(--clr-background-main);
          color: var(--clr-text-main);
        }

        /* A elements that don't have a class get default styles */
        a:not([class]) {
          text-decoration-skip-ink: auto;
        }

        /* Make images easier to work with */
        img,
        picture,
        svg {
          max-width: 100%;
          display: block;
        }

        /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
        @media (prefers-reduced-motion: reduce) {
          html:focus-within {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* Utility classes */

        //  Text color

        .text-main {
          color: var(--clr-text-main);
        }
        .text-alt {
          color: var(--clr-text-alt);
        }
        .text-accent {
          color: var(--clr-accent);
        }

        // Backgrounds

        .bg-main {
          color: var(--clr-background-main);
        }
        .bg-alt {
          color: var(--clr-background-alt);
        }
        .bg-accent {
          color: var(--clr-background-accent);
        }

        // Font variants

        .fv-h1 {
          font-size: var(--fs-h1);
          line-height: var(--lh-h1);
        }

        .fv-h2 {
          font-size: var(--fs-h2);
          line-height: var(--lh-h2);
        }

        .fv-h3 {
          font-size: var(--fs-h3);
          line-height: var(--lh-h3);
        }
        .fv-h4 {
          font-size: var(--fs-h4);
          line-height: var(--lh-h4);
        }
        .fv-h5 {
          font-size: var(--fs-h5);
          line-height: var(--lh-h5);
        }
        .fv-h6 {
          font-size: var(--fs-h6);
          line-height: var(--lh-h6);
        }
        .fv-subtitle {
          font-size: var(--fs-subtitle);
          line-height: var(--lh-subtitle);
        }
        .fv-p {
          font-size: var(--fs-p);
          line-height: var(--lh-p);
        }

        // Font weight

        .fw-thin {
          font-weight: var(--fw-thin);
        }
        .fw-extra-light {
          font-weight: var(--fw-extra-light);
        }
        .fw-light {
          font-weight: var(--fw-light);
        }
        .fw-regular {
          font-weight: var(--fw-regular);
        }
        .fw-medium {
          font-weight: var(--fw-medium);
        }
        .fw-semi-bold {
          font-weight: var(--fw-semi-bold);
        }
        .fw-bold {
          font-weight: var(--fw-bold);
        }
        .fw-extra-bold {
          font-weight: var(--fw-extra-bold);
        }
        .fw-black {
          font-weight: var(--fw-black);
        }
        .fw-extra-black {
          font-weight: var(--fw-extra-black);
        }
      `}
    />
  );
};

export default GlobalStyles;
