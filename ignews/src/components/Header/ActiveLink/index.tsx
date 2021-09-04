import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { ReactElement, cloneElement, useMemo } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const className = useMemo(() => {
    if (asPath === '/' && rest.href === '/') {
      return activeClassName;
    } else if (rest.href !== '/' && asPath.startsWith(rest.href.toString())) {
      return activeClassName;
    }
    return '';
  }, [asPath]);

  return <Link {...rest}>{cloneElement(children, { className })}</Link>;
}
