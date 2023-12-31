import { useState } from 'react';
import NextApp from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';
import '@mantine/core/styles.css';
export default function App(props) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState(props.colorScheme);

  const colorSchemeManager = localStorageColorSchemeManager({ key: 'mantine-color-scheme' });

  const toggleColorScheme = (value) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Matthew Magnotta</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      {/* <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}> */}
      <MantineProvider
        colorSchemeManager={colorSchemeManager}
        toggleColorScheme={toggleColorScheme}
        theme={{
          colorScheme,
          headings: {
            // properties for all headings
            fontWeight: 400,
            // fontFamily: 'Roboto',

            // properties for individual headings, all of them are optional
            sizes: {
              h1: { fontWeight: 700, fontSize: '1.4rem' /* lineHeight: 1.4, */ },
              h2: { fontSize: '1rem', lineHeight: 1.4 },
              h6: { fontWeight: 900 }
            }
          }
        }}
        withGlobalStyles
        withNormalizeCSS>
        <Component {...pageProps} />
        {/* <Notifications /> */}
      </MantineProvider>
      {/* </ColorSchemeProvider> */}
    </>
  );
}

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark'
  };
};
