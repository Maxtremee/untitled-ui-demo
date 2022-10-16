import { cloneElement, PropsWithChildren, ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from '../Link';

export type NavLinkChildProps = {
  isActive: boolean;
};

type NavLinkProps = LinkProps & {
  exact?: boolean;
};

export default function NavLink({
  exact,
  href,
  children,
  ...rest
}: PropsWithChildren<NavLinkProps>) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Link {...rest} href={href}>
      {cloneElement(children as ReactElement, {
        isActive,
      })}
    </Link>
  );
}
