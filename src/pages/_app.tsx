import { Footer } from '../components/_Footer'
import { Header } from '../components/_Header'
import '../styles/core/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
