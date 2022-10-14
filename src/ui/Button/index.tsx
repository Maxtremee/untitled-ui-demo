import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { button, ButtonVariants } from "./button.css"

type ButtonProps = ButtonVariants &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button({ background, size, disabled, ...rest }: ButtonProps) {
  return <button {...rest} className={button({ background, size, disabled })} />
}
