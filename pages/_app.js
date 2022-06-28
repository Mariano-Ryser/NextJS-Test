import '../styles/globals.css'
import '../styles/Home.module.css'
import Layout from "../components/Layout"
import Head from 'next/head';


// NPM RUN DEV
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="default" />
        
        <title>Wantanera</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka&family=Shadows+Into+Light&display=swap" rel="stylesheet"></link>
      </Head>

      <Layout>
          <Component {...pageProps} />
      </Layout>
      

    </>
  )
}

export default MyApp
