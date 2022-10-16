import { DetailedHTMLProps, HTMLAttributes } from "react"
import { paragraph, TextVariants } from "./text.css"

type TextProps = TextVariants &
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

export default function Button({ size, weight, color, ...rest }: TextProps) {
  if (size === "display-2xl") {
    return <h1 {...rest} className={paragraph({ size, weight, color })} />
  }
  if (size === "display-xl") {
    return <h2 {...rest} className={paragraph({ size, weight, color })} />
  }
  if (size === "display-lg") {
    return <h3 {...rest} className={paragraph({ size, weight, color })} />
  }
  if (size === "display-md") {
    return <h4 {...rest} className={paragraph({ size, weight, color })} />
  }
  if (size === "display-sm") {
    return <h5 {...rest} className={paragraph({ size, weight, color })} />
  }
  if (size === "display-xs") {
    return <h6 {...rest} className={paragraph({ size, weight, color })} />
  }
  return <p {...rest} className={paragraph({ size, weight, color })} />
}
