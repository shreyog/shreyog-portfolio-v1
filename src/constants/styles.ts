export const COLORS = {
  light: {
    text: {
      main: "hsl(0deg, 0%, 14%)",
      alt: "hsl(180deg, 4%, 14%)",
    },
    background: {
      main: "hsl(30deg, 30%, 96%)",
      alt: "hsl(60deg, 100%, 100%)",
    },
    accent: "hsl(7deg, 89%, 62%)",
  },
  dark: {
    text: {
      main: "hsl(60deg, 100%, 100%)",
      alt: "hsl(214deg, 16%, 64%)",
    },
    background: {
      main: "hsl(240deg, 8%, 9%)",
      alt: "hsl(216deg, 6%, 15%)",
    },
    accent: "hsl(255deg, 83%, 65%)",
  },
};

export const COLOR_MODE_KEY = "color-mode";
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";

export type PATH_TYPE = "cssVarNames" | "objectAccessors";

export const pathTypes = {
  cssVarNames: "cssVarNames",
  objectAccessors: "objectAccessors",
};

export const cssColorVariableGenerator = (obj: {}) => {
  const isObject = (val: string | {}) =>
    val && typeof val === "object" && !Array.isArray(val);

  const addHyphen = (a: string, b: string) => (a ? `${a}-${b}` : b);
  const addDelimiter = (a: string, b: string) => (a ? `${a}.${b}` : b);

  const paths: (
    obj: {},
    head: string,
    pathType: PATH_TYPE | string
  ) => string[] = (obj = {}, head = "", pathType: PATH_TYPE | string) => {
    const colorEntries: [string, string | {}][] = Object.entries(obj);
    return colorEntries.reduce((product: string[], [key, value]) => {
      let fullPath =
        pathType === pathTypes.cssVarNames
          ? addHyphen(head, key)
          : addDelimiter(head, key);
      return isObject(value)
        ? product.concat(paths(value, fullPath, pathType))
        : product.concat(fullPath);
    }, []);
  };
  const cssVarNames = paths(obj, "--clr", pathTypes.cssVarNames);
  const objectAccessors = paths(obj, "", pathTypes.objectAccessors);
  return { cssVarNames, objectAccessors };
};
