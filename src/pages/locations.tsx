import styles from "../styles/views/Locations.module.scss"
import Head from "next/head";
import { CardLocation } from "../components/locations/_CardLocation";
import { ContactCard } from "../components/shared/_ContactCard";

export default function Locations() {
  return (
    <>
      <Head>
        <title>Designo | Locations</title>
        <meta name="description" content="Our locations :)" />
      </Head>

      <main className={styles.mainContainer}>
        <section className={styles.cardsArea}>
          <ul className={styles.cardsArea__list}>
            <CardLocation
              image='/assets/locations/desktop/image-map-canada.png'
              country='Canada'
              office='Designo Central Office'
              street='3886 Wellington Street'
              state='Toronto, Ontario M9C 3j5'
              number='+1 253-863-8967'
              email='contact@designo.co'
            />
            <CardLocation
              image='/assets/locations/desktop/image-map-australia.png'
              country='Australia'
              office='Designo AU Office'
              street='19 Ballone Strees'
              state='New South Wales 2443'
              number='(02) 6720 9092'
              email='contact@designo.au'
            />
            <CardLocation
              image='/assets/locations/desktop/image-map-united-kingdom.png'
              country='United Kingdom'
              office='Designo UK Office'
              street='13 Colorado Way'
              state='Rhyd-y-fro SA8 9GA'
              number='078 3115 1400'
              email='contact@designo.uk'
            />
          </ul>
        </section>
      </main>
      <ContactCard />
    </>
  )
}