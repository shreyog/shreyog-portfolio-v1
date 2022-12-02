import * as react from "react";

import {
  COLOR_MODE_KEY,
  COLORS,
  INITIAL_COLOR_MODE_CSS_PROP,
  cssColorVariableGenerator,
} from "./src/constants/styles";
import { THEME_MODES } from "./src/constants/themeModes";

import App from "./src/components/App";

function setColorsByTheme() {
  const colors = "🌈";
  const colorModeKey = "🔑";
  const colorModeCssProp = "⚡️";

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = "light";

  const hasUsedToggle = typeof persistedPreference === "string";

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? "dark" : "light";
  }

  const root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  const THEME_COLORS = colors[colorMode];

  const isObject = (val) =>
    val && typeof val === "object" && !Array.isArray(val);

  const addHyphen = (a, b) => (a ? a + "-" + b : b);
  const addDelimiter = (a, b) => (a ? a + "." + b : b);

  const paths = (obj, head, pathType) => {
    const colorEntries = Object.entries(obj);
    return colorEntries.reduce((product, [key, value]) => {
      let fullPath =
        pathType === "cssVarNames"
          ? addHyphen(head, key)
          : addDelimiter(head, key);
      return isObject(value)
        ? product.concat(paths(value, fullPath, pathType))
        : product.concat(fullPath);
    }, []);
  };

  if (THEME_COLORS) {
    const cssVarNames = paths(THEME_COLORS, "--clr", "cssVarNames");
    const objectAccessors = paths(THEME_COLORS, "", "objectAccessors");

    cssVarNames.forEach((entry, index) => {
      const nestedAccess = objectAccessors[index];
      const value = nestedAccess
        .split(".")
        .reduce((prev, cur) => prev[cur], THEME_COLORS);
      root.style.setProperty(entry, value);
    });
  }
}

const InjectScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace('"🌈"', JSON.stringify(COLORS))
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP);

  const calledFunction = `(${boundFn})()`;

  //   calledFunction = await minify(calledFunction).code;

  // eslint-disable-next-line
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: calledFunction,
      }}
    />
  );
};

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = () => {
  // Create a string holding each CSS variable:
  /*
      `--color-text: black;
      --color-background: white;`
    */

  const THEME_COLORS = COLORS[THEME_MODES.LIGHT];

  const { cssVarNames, objectAccessors } =
    cssColorVariableGenerator(THEME_COLORS);

  const cssVariableString = cssVarNames.reduce((acc, entry, index) => {
    const nestedAccess = objectAccessors[index];
    const value = nestedAccess
      .split(".")
      .reduce((prev, cur) => prev[cur], THEME_COLORS);
    return `${acc}\n${entry}: ${value};`;
  }, "");

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents([<FallbackStyles key={"fallback-styles"} />]);
  setPreBodyComponents([<InjectScriptTag key={"inject-script"} />]);
};

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>;
};
