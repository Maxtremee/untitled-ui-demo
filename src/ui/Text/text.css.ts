import { recipe, RecipeVariants } from "@vanilla-extract/recipes"
import { colorVariants } from "@styles/sprinkles.css"

export const paragraph = recipe({
  base: [
    {
      margin: 0,
    },
  ],
  variants: {
    size: {
      "display-2xl": {
        fontSize: 72,
        lineHeight: "90px",
        letterSpacing: "-2%",
      },
      "display-xl": {
        fontSize: 60,
        lineHeight: "72px",
        letterSpacing: "-2%",
      },
      "display-lg": {
        fontSize: 48,
        lineHeight: "60px",
        letterSpacing: "-2%",
      },
      "display-md": {
        fontSize: 36,
        lineHeight: "44px",
        letterSpacing: "-2%",
      },
      "display-sm": {
        fontSize: 30,
        lineHeight: "38px",
      },
      "display-xs": {
        fontSize: 24,
        lineHeight: "32px",
      },
      xl: {
        fontSize: 20,
        lineHeight: "30px",
      },
      lg: {
        fontSize: 18,
        lineHeight: "28px",
      },
      md: {
        fontSize: 16,
        lineHeight: "24px",
      },
      small: {
        fontSize: 14,
        lineHeight: "20px",
      },
      xs: {
        fontSize: 12,
        lineHeight: "18px",
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
    color: colorVariants,
  },
  defaultVariants: {
    size: "md",
    weight: "regular",
  },
})

export type TextVariants = RecipeVariants<typeof paragraph>
