import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css"

const global = createGlobalTheme("html", {
  space: {
    none: "0",
    small: "4px",
    medium: "8px",
    large: "12px",
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "system-ui",
  },
})

const colors = createThemeContract({
  backgroundSidebar: null,
  backgroundMain: null,
  text: null,
  textSidebar: null,
})

export const lightTheme = createTheme(colors, {
  backgroundSidebar: "#6941C6",
  backgroundMain: "#FFFFFF",
  text: "#101828",
  textSidebar: "#F2F4F7",
})

export const darkTheme = createTheme(colors, {
  backgroundSidebar: "#101828",
  backgroundMain: "#FFFFFF",
  text: "#F2F4F7",
  textSidebar: "#F2F4F7",
})

export const vars = { ...global, colors }
