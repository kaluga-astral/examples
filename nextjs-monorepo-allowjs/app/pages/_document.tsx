import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { createStylesCache, createStylesServer } from '@example/ui';
import { theme } from 'config/theme';

export class Document extends NextDocument<{
  emotionStyleTags: JSX.Element[];
}> {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage: DocumentContext['renderPage'] = ctx.renderPage;
    const cache = createStylesCache({ prepend: true, key: 'css' });
    const { extractCriticalToChunks } = createStylesServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        enhanceApp: (App: any) =>
          function EnhanceApp(props) {
            return <App stylesCache={cache} {...props} />;
          },
      });

    const initialProps = await NextDocument.getInitialProps(ctx);
    const emotionStyleTags = extractCriticalToChunks(
      initialProps.html,
    ).styles.map((style) => (
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

export default Document;
