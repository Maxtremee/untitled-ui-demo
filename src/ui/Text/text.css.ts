import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { sprinkles } from "@styles/sprinkles.css"

export const paragraph = recipe({
  base: [
    sprinkles({
      color: {
        darkMode: "white",
        lightMode: "black",
      },
    }),
  ],
  variants: {
    size: {
      "display-2xl": {
        fontSize: 72,
        lineHeight: 90,
        letterSpacing: "-2%",
      },
      "display-xl": {
        fontSize: 60,
        lineHeight: 72,
        letterSpacing: "-2%",
      },
      "display-lg": {
        fontSize: 48,
        lineHeight: 60,
        letterSpacing: "-2%",
      },
      "display-md": {
        fontSize: 36,
        lineHeight: 44,
        letterSpacing: "-2%",
      },
      "display-sm": {
        fontSize: 30,
        lineHeight: 38,
      },
      "display-xs": {
        fontSize: 24,
        lineHeight: 32,
      },
      xl: {
        fontSize: 20,
        lineHeight: 30,
      },
      lg: {
        fontSize: 18,
        lineHeight: 28,
      },
      md: {
        fontSize: 16,
        lineHeight: 24,
      },
      small: {
        fontSize: 14,
        lineHeight: 20,
      },
      xs: {
        fontSize: 12,
        lineHeight: 18,
      },
    },
    weight: {
      regular: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      semibold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
    },
  },
  defaultVariants: {
    size: "md",
    weight: "regular",
  },
})

export type TextVariants = RecipeVariants<typeof paragraph>
