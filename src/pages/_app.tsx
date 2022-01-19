import Layout from '@components/Layout';
import SearchModalProvider from '@components/search/SearchModalProvider';
import { SearchResultData } from '@components/search/SearchResultData';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import GlobalStyles from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

const AppShell = ({ children }) => {
  const router = useRouter();

  const handleSelect = (selectedItem: SearchResultData) => {
    console.log('Selected item: ' + selectedItem);
    router.push(`/hits/${selectedItem.id}`);
  };

  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyles />
      <SearchModalProvider onSelect={handleSelect}>
        <Layout>{children}</Layout>
      </SearchModalProvider>
    </EmotionThemeProvider>
  );
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
};

export default MyApp;
