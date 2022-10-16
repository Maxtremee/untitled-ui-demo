import { style } from "@vanilla-extract/css"
import { sprinkles } from "@styles/sprinkles.css"

export const layout = style([
  sprinkles({
    background: {
      darkMode: "gray-900",
      lightMode: "primary-700",
    },
  }),
  {
    display: "flex",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
])

export const sidebar = style([
  sprinkles({
    color: {
      darkMode: "white",
      lightMode: "black",
    },
  }),
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "width 300ms ease",
    width: 82,
    padding: 10,
    paddingTop: "2rem",
    ":hover": {
      width: 280,
    },
  },
])

export const main = style([
  sprinkles({
    color: "black",
    background: "gray-25",
  }),
  {
    marginTop: 12,
    borderRadius: "40px 0 0 0",
    padding: "32px 32px 48px 32px",
    width: "100%",
    overflowY: "auto",
  },
])
