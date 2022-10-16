import { style } from "@vanilla-extract/css"
import { sprinkles } from "@styles/sprinkles.css"

export const index = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  {
    minWidth: "100vw",
    minHeight: "100vh",
    flexDirection: "column",
    gap: 20
  },
])
