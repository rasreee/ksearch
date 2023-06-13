import styled from "@emotion/styled";
import { FC, PropsWithChildren } from "react";

import { Header } from "./header";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100%;
  width: 100%;
`;

type LayoutProps = PropsWithChildren<{}>;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>
        <Centered>{children}</Centered>
      </Main>
    </div>
  );
};

export default Layout;
