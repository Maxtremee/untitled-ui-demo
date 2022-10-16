import clsx from "clsx"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { PropsWithChildren } from "react"
import { link } from "./link.css"

export type LinkProps = {
  className?: string
  href: string
  nextLinkProps?: NextLinkProps
}

export default function Link({
  className,
  href,
  nextLinkProps,
  children,
  ...rest
}: PropsWithChildren<LinkProps>) {
  return (
    <NextLink {...nextLinkProps} href={href} passHref>
      <a className={clsx(link, className)} {...rest}>
        {children}
      </a>
    </NextLink>
  )
}
