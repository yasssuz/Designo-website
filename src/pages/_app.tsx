import { Footer } from '../components/shared/_Footer'
import { Header } from '../components/shared/_Header'
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
