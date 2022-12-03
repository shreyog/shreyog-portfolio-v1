import React, { useContext } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";

import { THEME_MODES } from "@/constants/themeModes";

const DarkToggle = () => {
  const themeCtx = useContext(ThemeContext);

  if (!themeCtx) return <></>;

  if (!themeCtx.colorMode) {
    return null;
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={themeCtx.colorMode === THEME_MODES.DARK}
        onChange={(ev) => {
          themeCtx.setColorMode(
            ev.target.checked ? THEME_MODES.DARK : THEME_MODES.LIGHT
          );
        }}
      />{" "}
      Dark
    </label>
  );
};

export default DarkToggle;
