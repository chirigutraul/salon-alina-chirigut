import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Lato, Montserrat } from "@next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";

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
          <Component {...pageProps} />
        </main>
      </Layout>
    </SessionProvider>
  );
}
