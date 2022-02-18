import * as React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { createStylesServer } from '@astral/ui';
import { theme } from '../src/theme';
import { createStylesCache } from '../src/createStylesCache';

export class Document extends NextDocument<{ emotionStyleTags: JSX.Element[] }> {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    const cache = createStylesCache();
    const { extractCriticalToChunks } = createStylesServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) =>
          function EnhanceApp(props) {
            return <App stylesCache={cache} {...props} />;
          },
      });

    const initialProps = await NextDocument.getInitialProps(ctx);
    const emotionStyleTags = extractCriticalToChunks(initialProps.html).styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      emotionStyleTags,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document
