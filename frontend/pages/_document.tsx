import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="static/favicon.ico" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="theme-color" content="#FFFFFF" />
          <link rel="apple-touch-icon" href="/static/logo192.png" />
          <link rel="manifest" href="/static/manifest.json" />

          <meta property="og:type" content="website" />
          <meta property="twitter:card" content="summary_large_image" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
