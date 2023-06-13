import { GitHubIcon } from "components/icons/GitHubIcon";
import { ExternalLink } from "components/ui/ExternalLink";
import { FC } from "react";

import * as S from "./styles";

export const Header: FC = () => {
  return (
    <S.Header>
      <S.Title>⌘K Search Modal</S.Title>
      <div>
        <ExternalLink href="https://github.com/rasreee/ksearch">
          <GitHubIcon />
        </ExternalLink>
      </div>
    </S.Header>
  );
};
