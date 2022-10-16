import { sidebarContainer } from "@layouts/DashboardLayout/styles.css"
import { colors, sprinkles } from "@styles/sprinkles.css"
import { buttonBase } from "@ui/Button/button.css"
import { style } from "@vanilla-extract/css"

const sidebarBase = style({
  padding: "8px 12px",
  width: "90%",
  overflow: "hidden",
})

export const sidebarLink = style([
  buttonBase,
  sidebarBase,
  {
    background: "transparent",
    gap: "15px",
    ":hover": {
      backgroundColor: colors["gray-700"],
    },
  },
])

export const icon = style({
  height: 18,
  aspectRatio: "1 / 1",
})

export const avatar = style({
  borderRadius: "50%",
  height: 40,
  aspectRatio: "1 / 1",
})

export const logoutIcon = style({
  height: "100%",
})

export const expanded = style({
  opacity: 0,
  transition: "opacity 200ms ease",
  "@container": {
    [`${sidebarContainer} (min-width: 100px)`]: {
      opacity: 1,
    },
  },
})

export const userLink = style([
  sidebarLink,
  {
    padding: "8px 12px 8px 0",
  },
])

export const user = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "large",
  }),
  expanded,
])

export const appName = style([
  sidebarBase,
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "large",
  }),
  {
    whiteSpace: "nowrap",
  },
])
