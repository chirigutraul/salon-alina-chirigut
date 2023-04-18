import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/layout";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <SWRConfig
          value={{
            refreshInterval: 3000,
            fetcher: (url: string) => fetch(url).then((res) => res.json()),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </Layout>
    </SessionProvider>
  );
}
