import { cloneElement, ReactElement, useMemo } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isActive = useMemo(() => {
    if (shouldMatchExactHref) {
      return asPath === String(rest.href) || String(rest.as);
    }

    return asPath.startsWith(String(rest.href) || String(rest.as));
  }, [asPath]);

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  );
}
