import { DetailedHTMLProps, HTMLAttributes } from "react"
import clsx from "clsx"
import { divider, DividerVariants } from "./divider.css"

type DividerProps = DividerVariants &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function Divider({
  direction,
  className,
  ...rest
}: DividerProps) {
  return <div {...rest} className={clsx(className, divider({ direction }))} />
}
