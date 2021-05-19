import Head from 'next/head'
import { Hero } from '../components/home/_Hero'
import { DesingLink } from '../components/shared/_CardLink'
import styles from '../styles/views/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | Home</title>
        <meta name="description" content="With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services." />
      </Head>

      <main className={styles.main}>
        <Hero />
        <section className={styles.cardsLinks}>
          <ul style={{ listStyle: 'none' }}>
            <DesingLink
              title="Web Design"
              pageURL="/design/web-design"
              imgURL="/assets/home/desktop/image-web-design-small.jpg"
            />
            <DesingLink
              title="App Design"
              pageURL="/design/app-design"
              imgURL="/assets/home/desktop/image-app-design.jpg"
            />
            <DesingLink
              title="Web Design"
              pageURL="/design/web-design"
              imgURL="/assets/home/desktop/image-web-design-small.jpg"
            />
          </ul>
        </section>
      </main>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
