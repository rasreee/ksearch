import Layout from "@components/Layout";
import SearchModalProvider from "@components/search/SearchModalProvider";
import { SearchResultData } from "@components/search/SearchResultData";
import { ThemeProvider as ThemeProvider } from "@emotion/react";
import GlobalStyles from "@styles/GlobalStyles";
import { theme } from "@styles/theme";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  const handleSelect = (selectedItem: SearchResultData) => {
    console.log("Selected item: " + selectedItem);
    router.push(`/hits/${selectedItem.id}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SearchModalProvider onSelect={handleSelect}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchModalProvider>
    </ThemeProvider>
  );
};

export default MyApp;
