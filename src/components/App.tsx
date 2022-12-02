import React from "react";

import { ThemeProvider } from "@/contexts/ThemeContext";
import GlobalStyles from "./GlobalStyles";

function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default App;
