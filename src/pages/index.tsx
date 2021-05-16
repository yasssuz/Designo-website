import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/shared/_Header'
import styles from '../styles/views/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | Home</title>
        <meta name="description" content="With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services." />
      </Head>

      <main className={styles.main}>
        <div className="padding-container">
          <section className={styles.hero}>
            <div className={`${styles.hero__content}`}>
              <h1 className={`${styles.hero__title} title-primary`}>Award-winning custom designs and digital branding solutions</h1>
              <p className={`${styles.hero__description} paragraph-primary`}>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
              <a href="#" className={`${styles.hero__buttonLink} button-primary`}>Learn More</a>
              {/* <div className={styles.hero__illutration}>
                <Image 
                  src="/assets/home/desktop/image-hero-phone.png"
                  alt="phone illustration"
                  width={ 624 }
                  height={ 913 }
                  layout='fixed'
                />
                <img src="/assets/home/desktop/image-hero-phone.png" alt="phone illustration"/>
              </div> */}
            </div>
          </section>
        </div>
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
