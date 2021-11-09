// import App from 'next/app'
import NewMenu from "../components/NewMenu";
import Head from "next/head";
import dynamic from 'next/dynamic'
import "nprogress/nprogress.css"

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <TopProgressBar />
      <NewMenu />
      <Component {...pageProps} />
      <style global jsx>{`
        body::-webkit-scrollbar,
        body::-webkit-scrollbar-track {
          overflow: hidden;
          background: #8e208b;
        }
        body::-webkit-scrollbar-thumb {
          border: 10px solid #404040;
          border-radius: 200px;
          -webkit-transition: background 0.25s;
          -webkit-transition: background 0.25s;
          transition: background 0.25s;
          background: hsla(0, 0%, 100%, 1);
        }
        body::-webkit-scrollbar-thumb:active {
          border: white;
        }

        body::-webkit-scrollbar,
        body::-webkit-scrollbar-track {
          overflow: hidden;
          background: hsla(0, 0%, 100%, 0);
        }

        #nprogress .bar {
          background: #8180FF !important;
          }
      `}</style>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
