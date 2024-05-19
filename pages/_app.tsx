import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";


import "react-toastify/dist/ReactToastify.min.css";
import ModalManager from "@/common/components/modal/components/ModalManager";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Collabio | Online Whiteboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <ToastContainer />
        <ModalManager />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default App;
