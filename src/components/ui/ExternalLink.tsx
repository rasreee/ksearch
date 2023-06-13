import { FC, PropsWithChildren } from "react";

export type ExternalLinkProps = PropsWithChildren<{
  href: string;
}>;

export const ExternalLink: FC<ExternalLinkProps> = ({ children, ...props }) => {
  return (
    <a {...props} rel="noopener" target="_blank">
      {children}
    </a>
  );
};
