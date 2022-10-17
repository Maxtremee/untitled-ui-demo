import { createContainer, style } from "@vanilla-extract/css"
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

export const sidebarContainer = createContainer()

export const sidebar = style([
  sprinkles({
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    gap: "large",
    color: {
      darkMode: "white",
      lightMode: "black",
    },
  }),
  {
    containerName: sidebarContainer,
    containerType: "size",
    transition: "width 400ms ease",
    width: 50,
    padding: 20,
    paddingTop: "2rem",
    ":hover": {
      width: 360,
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
