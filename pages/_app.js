import React from "react";
import Nav from "../components/Nav";
import { DevProvider } from "../provider/stateProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <DevProvider>
        <Nav />
        <Component {...pageProps} />
      </DevProvider>
    </React.Fragment>
  );
}

export default MyApp;
