import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles"

const space = {
  none: 0,
  small: "4px",
  medium: "8px",
  large: "16px",
}

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline", "grid"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    gap: {
      none: 0,
      small: 4,
      medium: 8,
      large: 16,
    },
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
})

export const colors = {
  transparent: "transparent",
  white: "#FFFFFF",
  black: "#000000",
  "gray-25": "#FCFCFD",
  "gray-50": "#F9FAFB",
  "gray-100": "#F2F4F7",
  "gray-200": "#EAECF0",
  "gray-300": "#D0D5DD",
  "gray-400": "#98A2B3",
  "gray-500": "#667085",
  "gray-600": "#475467",
  "gray-700": "#344054",
  "gray-800": "#1D2939",
  "gray-900": "#101828",
  "primary-25": "#FCFAFF",
  "primary-50": "#F9F5FF",
  "primary-100": "#F4EBFF",
  "primary-200": "#E9D7FE",
  "primary-300": "#D6BBFB",
  "primary-400": "#b692f6",
  "primary-500": "#9e77ed",
  "primary-600": "#7f59d9",
  "primary-700": "#6941c6",
  "primary-800": "#53389e",
  "primary-900": "#42307d",
  "error-25": "#fffbfa",
  "error-50": "#fef3f2",
  "error-100": "#fee4e2",
  "error-200": "#fecdca",
  "error-300": "#fda29b",
  "error-400": "#f97066",
  "error-500": "#f04438",
  "error-600": "#d92d20",
  "error-700": "#b42318",
  "error-800": "#912018",
  "error-900": "#7a271a",
  "warning-25": "#fffcf5",
  "warning-50": "#fffaeb",
  "warning-100": "#fef0c7",
  "warning-200": "#fedf89",
  "warning-300": "#fec84b",
  "warning-400": "#fdb022",
  "warning-500": "#f79009",
  "warning-600": "#dc6803",
  "warning-700": "#b54708",
  "warning-800": "#93370d",
  "warning-900": "#7a2e03",
  "success-25": "#f6fef9",
  "success-50": "#ecfdf3",
  "success-100": "#d1fadf",
  "success-200": "#a6f4c5",
  "success-300": "#6ce9a6",
  "success-400": "#32d583",
  "success-500": "#12b76a",
  "success-600": "#039855",
  "success-700": "#027a48",
  "success-800": "#05603a",
  "success-900": "#054f31",
  "secondary-25": "#fef6fb",
  "secondary-50": "#fdf2fa",
  "secondary-100": "#fce7f6",
  "secondary-200": "#fcceee",
  "secondary-300": "#faa7e0",
  "secondary-400": "#f670c7",
  "secondary-500": "#ee46bc",
  "secondary-600": "#dd2590",
  "secondary-700": "#c11574",
  "secondary-800": "#93165f",
  "secondary-900": "#851651",
}

export type ColorVariants = {
  [key: string]: {
    color: string
  }
}

export const colorVariants = Object.keys(colors).reduce(
  (prev, key) => ({
    ...prev,
    [key]: {
      color: colors[key as keyof typeof colors],
    },
  }),
  {} as ColorVariants
)

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
    hover: {
      selector: "&:hover",
    },
  },
  defaultCondition: "lightMode",
  properties: {
    color: colors,
    background: colors,
    borderColor: colors,
  },
})

export const sprinkles = createSprinkles(responsiveProperties, colorProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
