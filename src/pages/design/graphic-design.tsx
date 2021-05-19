import Head from "next/head";
import styles from "../../styles/views/DesignPages.module.scss"
import { ContactCard } from "../../components/shared/_ContactCard";
import { Banner } from "../../components/design/_Banner";
import { DesignCard } from "../../components/design/_ProjectCard";
import { DesingLink } from "../../components/shared/_CardLink";

export default function GraphicDesign() {
  const designCards = [
    {
      imgURL: '/assets/graphic-design/desktop/image-change.jpg',
      title: 'tim brown',
      description: 'A book cover designed for Tim Brown’s new release, ‘Change’'
    },
    {
      imgURL: '/assets/graphic-design/desktop/image-boxed-water.jpg',
      title: 'boxed-water',
      description: 'A simple packaging concept made for Boxed Water'
    },
    {
      imgURL: '/assets/graphic-design/desktop/image-science.jpg',
      title: 'science!',
      description: 'A poster made in collaboration with the Federal Art Project'
    },
  ]

  return (
    <>
      <Head>
        <title>Designo | Graphic Design</title>
        <meta name="description" content="We deliver eye-catching branding materials that are tailored to meet your business objectives" />
      </Head>

      <main className={styles.main}>
        <Banner
          title="Graphic Design"
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
            title="web design"
            imgURL="/assets/home/desktop/image-web-design-small.jpg"
            pageURL="/design/web-design"
          />
        </ul>
      </main>

      <ContactCard />
    </>
  )
}