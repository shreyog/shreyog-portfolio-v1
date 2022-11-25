import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    mode: string;
    main: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    highlight: {
      primary: string;
      secondary: string;
    };
    font: {
      fontFamily: string;
    };
  }
}
