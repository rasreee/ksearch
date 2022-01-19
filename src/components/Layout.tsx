import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 10rem 0;
`;

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Main>
      <Container>{children}</Container>
    </Main>
  );
}

export default Layout;
