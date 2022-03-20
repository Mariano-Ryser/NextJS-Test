import '../styles/globals.css'
import '../styles/Home.module.css'
import Layout from "../components/Layout"
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="default" />
        <title>Wantanera</title>

        <style>
         @import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');
        </style>
      </Head>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
