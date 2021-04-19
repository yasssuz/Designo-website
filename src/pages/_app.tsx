import Head from 'next/head'
import '../styles/core/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
