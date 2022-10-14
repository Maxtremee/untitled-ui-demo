import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { button, ButtonVariants } from "./button.css"

type ButtonProps = ButtonVariants &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button({ background, size, ...rest }: ButtonProps) {
  return <button {...rest} className={button({ background, size })} />
}
