import type { AnchorHTMLAttributes } from "react";

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
};

/**
 * Marketing-site navigation intentionally uses native links. They remain usable
 * before hydration and avoid loading an app-router prefetch runtime for static
 * public pages.
 */
export function SiteLink({ href, ...props }: SiteLinkProps) {
  return <a href={href} {...props} />;
}
