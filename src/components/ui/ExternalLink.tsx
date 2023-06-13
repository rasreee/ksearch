import { forwardRef, PropsWithChildren } from "react";

export type ExternalLinkProps = PropsWithChildren<{
  href: string;
}>;

export const ExternalLink = forwardRef<any, ExternalLinkProps>(
  ({ children, ...props }, ref) => {
    return (
      <a ref={ref} {...props} rel="noopener" target="_blank">
        {children}
      </a>
    );
  }
);

ExternalLink.displayName = "ExternalLink";
