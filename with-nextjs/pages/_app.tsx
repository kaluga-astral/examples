import * as React from 'react'
import Head from 'next/head'
import { AppProps as NextAppProps } from 'next/app'
import {
  ThemeProvider,
  StylesCacheProvider,
  StylesCache,
} from '@astral/ui'
import { theme } from '../src/theme'
import { createStylesCache } from '../src/createStylesCache'

const clientSideEmotionCache = createStylesCache();

export type AppProps = NextAppProps & {
  stylesCache: StylesCache,
}

export const App: React.FC<AppProps> = (props) => {
  const { Component, stylesCache = clientSideEmotionCache, pageProps } = props;

  return (
    <StylesCacheProvider value={stylesCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StylesCacheProvider>
  )
}

export default App
