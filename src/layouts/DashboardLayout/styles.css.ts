import { globalStyle, style } from "@vanilla-extract/css"
import { vars } from "../../styles/vars.css"

globalStyle("body", {
  margin: 0,
})

export const layout = style({
  backgroundColor: vars.colors.backgroundSidebar,
  display: "flex",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
})

export const sidebar = style({
  color: vars.colors.textSidebar,
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
})

export const main = style({
  backgroundColor: vars.colors.backgroundMain,
  borderStyle: "solid",
  borderRadius: "40px 0 0 0",
  marginTop: 12,
  padding: "32px 32px 48px 32px",
  width: "100%",
  overflowY: "auto",
})
