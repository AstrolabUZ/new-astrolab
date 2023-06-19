import { useEffect } from "react";
import AOS from "aos";
import NextNProgress from "nextjs-progressbar";
import { Layout } from "components/Layout";
import { Provider } from "react-redux";
import { store } from "store/store";
import "./index.scss";
// import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Provider store={store}>
        <Layout>
          <NextNProgress color="#000066" />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
