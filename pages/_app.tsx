import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/layout";
import { SessionProvider } from "next-auth/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Lato, Montserrat } from "@next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import Loader from "components/Loader/loader";

const lato = Lato({
  weight: "900",
  subsets: ["latin-ext"],
  variable: "--font-lato",
});

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin-ext"],
  variable: "--font-montserrat",
});

config.autoAddCss = false;


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <main className={`${lato.variable} ${montserrat.variable}`}>
          <Loader/>
          <Component {...pageProps} />
        </main>
      </Layout>
    </SessionProvider>
  );
}
