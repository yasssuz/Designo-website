import styles from "../styles/views/About.module.scss"
import Head from "next/head"
import Image from "next/image"
import { AboutCard } from "../components/about/_AboutCard"
import { LocationsRow } from "../components/shared/_LocationsRow"

export default function About() {
  return (
    <>
      <Head>
        <title>Designo | About Us</title>
        <meta name="description" content="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences." />
      </Head>

      <main className={styles.mainContainer}>
        <section className={styles.banner}>
          <div>
            <Image
              src="/assets/about/desktop/image-about-hero.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.banner__content}>
            <h1 className="title-primary title-primary-white">About Us</h1>
            <p className="paragraph-primary">Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
          </div>
        </section>
        <AboutCard
          title='World-class talent'
          paragraph1='We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.'
          paragraph2='Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'
          imgSrc="/assets/about/desktop/image-world-class-talent.jpg"
        />
        <section className={styles.locations}>
          <LocationsRow />
        </section>
        <AboutCard
          title='The real deal'
          paragraph1='As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.'
          paragraph2='We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'
          imgSrc="/assets/about/desktop/image-real-deal.jpg"
          id="secondCard"
        />
      </main>
    </>
  )
}