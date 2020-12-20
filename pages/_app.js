import Head from "next/head";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "theme";
import FontFace from "components/font-face";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Header from "../components/header";
import Footer from "../components/footer";
import PageTransition from "../components/page-transitions";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
          <meta name="theme-color" content="#2BB0EC" />
        </Head>
        <DefaultSeo {...SEO} />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
      <FontFace />
    </>
  );
};

export default App;