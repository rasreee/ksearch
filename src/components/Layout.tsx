import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

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

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Main>
      <Centered>{children}</Centered>
    </Main>
  );
}

export default Layout;
