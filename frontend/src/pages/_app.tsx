import Logo from "@/components/Logo";
import { flexCenter, mobileView } from "@/styles/mixins";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import type { AppProps } from "next/app";
import { globalStyles } from "../styles/globalStyles";

const Layout = styled.div`
  ${flexCenter};
  flex-direction: column;
  min-height: 720px;
  max-width: 1024px;
  margin: 0 auto;

  ${mobileView} {
    padding: 12px;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Logo />
      <Layout>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
