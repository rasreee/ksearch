import { PropsWithChildren } from 'react'

import styled from '../lib/styled'

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 10rem 0;
`

export function Page({ children }: PropsWithChildren<{}>) {
  return (
    <Main>
      <Container>{children}</Container>
    </Main>
  )
}

Page.Section = styled.section`
  margin: 0.75rem 0;
  padding: 3rem 0;
`
