import Head from 'next/head'
import { ContactCard } from '../../components/_ContactCard'
import { DesignBanner } from '../../components/_DesignBanner'
import { DesignCard } from '../../components/_DesignCard'
import { DesingLink } from '../../components/_DesignLink'
import { Footer } from '../../components/_Footer'
import styles from '../../styles/views/web-design.module.scss'

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
    <div>
      <Head>
        <title>Designo | Web Design</title>
        <meta name="description" content="We build websites that serve as powerful marketing tools and bring memorable brand experiences."/>
      </Head>

      <DesignBanner 
        title="Web Design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />

      <main className={`${styles.main}`}>
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

      <div className={styles.footerArea}>
        <ContactCard />
      </div>
    </div>
  )
}