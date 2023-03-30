import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../../styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}
