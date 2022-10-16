import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import clsx from "clsx"
import { button, ButtonVariants } from "./button.css"

type ButtonProps = ButtonVariants &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button({
  background,
  size,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        className ? className : button({ background, size, disabled })
      )}
    />
  )
}
