import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { colors, sprinkles } from "@styles/sprinkles.css"

export const divider = recipe({
  variants: {
    direction: {
      horizontal: {
        width: "100%",
        borderBottom: `1px solid ${colors["gray-600"]}`,
      },
      vertical: {
        height: "100%",
        borderRight: `1px solid ${colors["gray-600"]}`,
        width: "1px",
      },
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
})

export type DividerVariants = RecipeVariants<typeof divider>
