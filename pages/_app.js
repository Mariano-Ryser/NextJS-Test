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
      </Head>

      <Layout>
          <Component {...pageProps} />
      </Layout>
      

    </>
  )
}

export default MyApp
