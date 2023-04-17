import Head from "next/head";
import type { AppProps } from "next/app";
import GlobalStyle from "../globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fav music list</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
