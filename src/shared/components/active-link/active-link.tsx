import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

export interface ActiveLinkProps extends LinkProps {
  /**
   * The content.
   */
  children: React.ReactElement;
  global?: boolean;
}

/**
 * The `ActiveLink` component is used send the `active` property to its child
 * if the current pathname matches the `href` prop.
 */
export const ActiveLink = (props: ActiveLinkProps): JSX.Element => {
  const {
    children, href, global, ...other
  } = props;

  const { asPath } = useRouter();

  const child = React.Children.only(children);

  const isActive = (): boolean => {
    if (!global) {
      return asPath === href;
    }
    const urlInArr = asPath.split('/');

    const ref = href.toString().slice(1);

    return urlInArr.includes(ref);
  };

  return (
    <Link href={href} passHref {...other}>
      {React.cloneElement(child, {
        active: isActive(),
      })}
    </Link>
  );
};
