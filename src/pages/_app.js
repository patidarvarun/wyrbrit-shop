import { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import { Toaster } from "react-hot-toast";
import { Provider as ReduxProvider } from "react-redux";
import nProgress from "nprogress";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { RTL } from "../components/rtl";
import { SettingsButton } from "../components/settings-button";
import { SplashScreen } from "../components/splash-screen";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import {
  SettingsConsumer,
  SettingsProvider,
} from "../contexts/settings-context";
import { AuthConsumer, AuthProvider } from "../contexts/jwt-context";
import { gtmConfig } from "../config";
import { gtm } from "../lib/gtm";
import { store } from "../store";
import { createTheme } from "../theme";
import { createEmotionCache } from "../utils/create-emotion-cache";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../i18n";

const client = new ApolloClient({
  uri: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
});

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    gtm.initialize(gtmConfig);
  }, []);
  const stripePromise = loadStripe(
    "pk_test_51LabasSBAnAyyheh1eHmZUT6yHELndmIh1LvJy4eDuMZQo3kATeWkh0dHCI90hUvxQdFhlaCBhrNyQ1VQDVoJCno001vmRtGRk"
  );
  // pk_test_6pRNASCoBOKtIshFeQd4XMUh

  return (
    <CacheProvider value={emotionCache}>
      <ApolloProvider client={client}>
        <Head>
          <title>Material Kit Pro</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ReduxProvider store={store}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <AuthProvider>
              <SettingsProvider>
                <SettingsConsumer>
                  {({ settings }) => (
                    <ThemeProvider
                      theme={createTheme({
                        direction: settings.direction,
                        responsiveFontSizes: settings.responsiveFontSizes,
                        mode: settings.theme,
                      })}
                    >
                      <RTL direction={settings.direction}>
                        <CssBaseline />
                        <Toaster position="top-center" />
                        <SettingsButton />
                        <Elements stripe={stripePromise}>
                          <AuthConsumer>
                            {(auth) =>
                              !auth.isInitialized ? (
                                <SplashScreen />
                              ) : (
                                getLayout(<Component {...pageProps} />)
                              )
                            }
                          </AuthConsumer>
                        </Elements>
                      </RTL>
                    </ThemeProvider>
                  )}
                </SettingsConsumer>
              </SettingsProvider>
            </AuthProvider>
          </LocalizationProvider>
        </ReduxProvider>
      </ApolloProvider>
    </CacheProvider>
  );
};

export default App;
