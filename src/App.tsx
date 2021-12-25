import { ThemeProvider } from '@emotion/react'

import { Page } from './layouts/Page'
import { KeyboardShortcuts } from './lib/keyboardShortcuts'
import { SearchModalProvider, SearchModalToggle } from './search'
import { GlobalStyles, theme } from './styles'

const TUTORIAL_BLOG_POST_URL = 'https://www.lesley.codes/blog/how-to-build-a-cmd-k-search-modal-1'

const HomePage = () => {
  return (
    <Page>
      <Page.Section>
        <h1>{KeyboardShortcuts.CMD_K} Search</h1>
        <a href={TUTORIAL_BLOG_POST_URL}>{'Read the tutorial'}</a>
      </Page.Section>
      <Page.Section>
        <SearchModalToggle />
      </Page.Section>
    </Page>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SearchModalProvider>
        <HomePage />
      </SearchModalProvider>
    </ThemeProvider>
  )
}

export default App
