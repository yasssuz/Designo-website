import Head from 'next/head'
import { Advantage } from '../components/home/_Advantage'
import { Hero } from '../components/home/_Hero'
import { DesingLink } from '../components/shared/_CardLink'
import { ContactCard } from '../components/shared/_ContactCard'
import styles from '../styles/views/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Designo | Home</title>
        <meta name="description" content="With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services." />
      </Head>

      <main className={styles.main}>
        <Hero />
        <section className={styles.linksList}>
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
              title="Graphic Design"
              pageURL="/design/graphic-design"
              imgURL="/assets/home/desktop/image-graphic-design.jpg"
            />
          </ul>
        </section>
        <section className={styles.advantagesList}>
          <ul style={{ listStyle: 'none' }}>
            <Advantage
              title="passionate"
              description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
            />
            <Advantage
              title="resourceful"
              description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
            />
            <Advantage
              title="friendly"
              description=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
            />
          </ul>
        </section>
      </main>

      <ContactCard />
    </>
  )
}
