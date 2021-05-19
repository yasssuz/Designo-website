import Head from 'next/head'
import { ContactCard } from '../../components/shared/_ContactCard'
import { Banner } from '../../components/design/_Banner'
import { DesignCard } from '../../components/design/_ProjectCard'
import { DesingLink } from '../../components/shared/_CardLink'
import styles from '../../styles/views/DesignPages.module.scss'

export default function WebDesign() {
  const designCards = [
    {
      imgURL: '/assets/web-design/desktop/image-express.jpg',
      title: 'express',
      description: 'A multi-carrier shipping website for ecommerce businesses'
    },
    {
      imgURL: '/assets/web-design/desktop/image-transfer.jpg',
      title: 'transfer',
      description: 'Site for low-cost money transfers and sending money within seconds'
    },
    {
      imgURL: '/assets/web-design/desktop/image-photon.jpg',
      title: 'photon',
      description: 'A state-of-the-art music player with high-resolution audio and DSP effects'
    },
    {
      imgURL: '/assets/web-design/desktop/image-builder.jpg',
      title: 'builder',
      description: 'Connects users with local contractors based on their location'
    },
    {
      imgURL: '/assets/web-design/desktop/image-blogr.jpg',
      title: 'blogr',
      description: 'Blogr is a platform for creating an online blog or publication'
    },
    {
      imgURL: '/assets/web-design/desktop/image-camp.jpg',
      title: 'camp',
      description: 'Get expert training in coding, data, design, and digital marketing'
    }
  ]

  return (
    <>
      <Head>
        <title>Designo | Web Design</title>
        <meta name="description" content="We build websites that serve as powerful marketing tools and bring memorable brand experiences." />
      </Head>

      <main className={styles.main}>
        <Banner
          title="Web Design"
          description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        />

        <ul className={styles.designsList}>
          {designCards.map(card => <DesignCard
            imgURL={card.imgURL}
            title={card.title}
            description={card.description}
            key={card.title}
          />)}
        </ul>

        <ul className={styles.linksList}>
          <DesingLink
            title="app design"
            imgURL="/assets/home/desktop/image-app-design.jpg"
            pageURL="/design/app-design"
          />
          <DesingLink
            title="graphic design"
            imgURL="/assets/home/desktop/image-graphic-design.jpg"
            pageURL="/design/graphic-design"
          />
        </ul>
      </main>

      <ContactCard />
    </>
  )
}