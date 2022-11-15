import "../styles/globals.css";
import "../styles/Particle.css";
import "../styles/createEvent.css";
import "../styles/tagInput.css";
import "../styles/Kwick.css";
import Head from "next/head";

import Scroll from "../Components/Scroll/Scroll";
import AlertState from "../Context/Alert/AlertState";
import AuthState from "../Context/Auth/AuthState";
import TopLoadingState from "../Context/TopLoading/TopLoadingState";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { SessionProvider } from "next-auth/react";
import EventState from "../Context/Event/EventState";
import ModalState from "../Context/Modal/ModalState";
import AnnounceState from "../Context/Announcement/AnnounceState";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const options = {
    timeout: 5000,
    position: positions.TOP_RIGHT,
    containerStyle: {
      zIndex: 10000,
      top: "10%",
    },
  };

  return (
    <>
      <SessionProvider session={session}>
        <Provider template={AlertTemplate} {...options}>
          <TopLoadingState>
            <AlertState>
              <AuthState>
                <EventState>
                  <AnnounceState>
                    <ModalState>
                      <AuthState>
                        <Head>
                          <meta charSet="UTF-8" />
                          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                          <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                          />
                          <link
                            rel="stylesheet"
                            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                            crossOrigin="anonymous"
                          />
                          {/* Socia median  */}
                          <link
                            rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                          />
                          <link
                            rel="stylesheet"
                            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                            crossOrigin="anonymous"
                          />
                          {/* social media end  */}
                          <link
                            rel="preconnect"
                            href="https://fonts.googleapis.com"
                          />
                          <link
                            rel="preconnect"
                            href="https://fonts.gstatic.com"
                            crossOrigin
                          />
                          <link
                            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Poppins&family=Ubuntu&display=swap"
                            rel="stylesheet"
                          />
                          <link
                            rel="stylesheet"
                            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                          />
                          <title>Think India MNIT Jaipur</title>
                        </Head>
                        <Scroll />
                        <div id="root"></div>
                        <Component {...pageProps} />
                        <script src="/JS/index.js" defer />
                      </AuthState>
                    </ModalState>
                  </AnnounceState>
                </EventState>
              </AuthState>
            </AlertState>
          </TopLoadingState>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
