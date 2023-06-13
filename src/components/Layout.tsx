import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

import { Header } from "./header";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  padding-top: 1.5rem;
  width: 100vw;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  max-width: 50rem;
  flex: 1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type LayoutProps = PropsWithChildren<{}>;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Root>
      <Header />
      <Main>{children}</Main>
    </Root>
  );
};

export default Layout;
