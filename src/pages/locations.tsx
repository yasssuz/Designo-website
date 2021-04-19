import Head from "next/head";
import { CardLocation } from "../components/_CardLocation";
import { Header } from "../components/_Header";
import styles from "../styles/views/Locations.module.scss"

export default function Locations() {
  const locations = [
    {
      image: '/assets/locations/mobile/canada-location.jpg',
      country: 'Canada',
      office: 'Designo Central Office',
      street: '3886 Wellington Street',
      state: 'Toronto, Ontario M9C 3j5',
      number: '+1 253-863-8967',
      email: 'contact@designo.co'
    },
    {
      image: '/assets/locations/mobile/australia-location.jpg',
      country: 'Australia', 
      office: 'Designo AU Office',
      street: '19 Ballone Strees',
      state: 'New South Wales 2443',
      number: '(02) 6720 9092',
      email: 'contact@designo.au'
    },
    {
      image: '/assets/locations/mobile/uk-location.jpg',
      country: 'United Kingdom',
      office: 'Designo UK Office',
      street: '13 Colorado Way',
      state: 'Rhyd-y-fro SA8 9GA',
      number: '078 3115 1400',
      email: 'contact@designo.uk'
    }
  ]

  return (
    <>
      <Head>
        <title>Designo | Locations</title>
        <meta name="description" content=""/>
      </Head>

      <Header />
      <main className={styles.mainContainer}>
        <section className={styles.cardsArea}>
          <ul className={styles.cardsArea__list}>
            {locations.map(location => <CardLocation cardData={location}/>)}
          </ul>
        </section>
      </main>
    </>
  )
}