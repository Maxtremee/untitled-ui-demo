import { style } from "@vanilla-extract/css"

export const link = style({
  ":link": {
    textDecoration: "inherit",
    color: "inherit",
  },
  ":visited": {
    textDecoration: "inherit",
    color: "inherit",
  },
})
