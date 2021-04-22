import Head from "next/head";
import { CardLocation } from "../components/_CardLocation";
import { Header } from "../components/_Header";
import styles from "../styles/views/Locations.module.scss"

export default function Locations() {
  return (
    <>
      <Head>
        <title>Designo | Locations</title>
        <meta name="description" content=""/>
      </Head>

      <main className={styles.mainContainer}>
        <section className={styles.cardsArea}>
          <ul className={styles.cardsArea__list}>
            {/* {locations.map(location => <CardLocation cardData={location}/>)} */}
            <div className={styles.cardsArea__mobileCards}>
              <CardLocation 
                image='/assets/locations/mobile/canada-location.jpg'
                country='Canada'
                office='Designo Central Office'
                street='3886 Wellington Street'
                state='Toronto, Ontario M9C 3j5'
                number='+1 253-863-8967'
                email='contact@designo.co'
              />
              <CardLocation 
                image='/assets/locations/mobile/australia-location.jpg'
                country='Australia'
                office='Designo AU Office'
                street='19 Ballone Strees'
                state='New South Wales 2443'
                number='(02) 6720 9092'
                email='contact@designo.au'
              />
              <CardLocation 
                image='/assets/locations/mobile/uk-location.jpg'
                country='United Kingdom'
                office='Designo UK Office'
                street='13 Colorado Way'
                state='Rhyd-y-fro SA8 9GA'
                number='078 3115 1400'
                email='contact@designo.uk'
              />
            </div>
            <div className={styles.cardsArea__tabletCards}>
              <CardLocation 
                  image='/assets/locations/tablet/image-map-canada.png'
                  country='Canada'
                  office='Designo Central Office'
                  street='3886 Wellington Street'
                  state='Toronto, Ontario M9C 3j5'
                  number='+1 253-863-8967'
                  email='contact@designo.co'
                />
                <CardLocation 
                  image='/assets/locations/tablet/image-map-australia.png'
                  country='Australia'
                  office='Designo AU Office'
                  street='19 Ballone Strees'
                  state='New South Wales 2443'
                  number='(02) 6720 9092'
                  email='contact@designo.au'
                />
                <CardLocation 
                  image='/assets/locations/tablet/image-map-uk.png'
                  country='United Kingdom'
                  office='Designo UK Office'
                  street='13 Colorado Way'
                  state='Rhyd-y-fro SA8 9GA'
                  number='078 3115 1400'
                  email='contact@designo.uk'
                />
            </div>
          </ul>
        </section>
      </main>
    </>
  )
}