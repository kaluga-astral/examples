import { FC } from 'react';
import Head from 'next/head';
import { AppProps as NextAppProps } from 'next/app';
import {
  StylesCache,
  StylesCacheProvider,
  ThemeProvider,
  createStylesCache,
} from '@example/ui';
import { theme } from 'config/theme';
import { Layout } from 'components';

const clientSideEmotionCache = createStylesCache({ prepend: true, key: 'css' });

export type AppProps = NextAppProps & {
  stylesCache: StylesCache;
};

export const App: FC<AppProps> = (props) => {
  const { Component, stylesCache = clientSideEmotionCache, pageProps } = props;

  return (
    <StylesCacheProvider value={stylesCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StylesCacheProvider>
  );
};

export default App;
