import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { sprinkles } from "@styles/sprinkles.css"
import { style } from "@vanilla-extract/css"

export const buttonBase = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: {
      darkMode: "white",
      lightMode: "black",
    },
  }),
  {
    padding: "10px 18px",
    border: 0,
    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    borderRadius: 8,
    outline: "none",
    transition: "all 300ms",
    ":hover": {
      cursor: "pointer",
    },
  },
])

export const button = recipe({
  base: buttonBase,
  variants: {
    background: {
      neutral: sprinkles({
        background: {
          lightMode: "gray-700",
          darkMode: "gray-500",
          hover: "gray-400",
        },
      }),
      primary: sprinkles({
        background: {
          lightMode: "primary-700",
          darkMode: "primary-500",
          hover: "primary-400",
        },
      }),
      secondary: sprinkles({
        background: {
          lightMode: "secondary-700",
          darkMode: "secondary-500",
          hover: "secondary-400",
        },
      }),
    },
    size: {
      small: sprinkles({ padding: "small" }),
      medium: sprinkles({ padding: "medium" }),
      large: sprinkles({ padding: "large" }),
    },
    disabled: {
      true: {
        pointerEvents: "none",
        cursor: "none",
        opacity: 0.9,
      },
    },
  },
  defaultVariants: {
    background: "primary",
    size: "medium",
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
