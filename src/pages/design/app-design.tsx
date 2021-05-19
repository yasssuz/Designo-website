import Head from "next/head";
import styles from "../../styles/views/DesignPages.module.scss";
import { ContactCard } from "../../components/shared/_ContactCard";
import { Banner } from "../../components/design/_Banner";
import { DesignCard } from "../../components/design/_ProjectCard";
import { DesingLink } from "../../components/shared/_CardLink";

export default function AppDesign() {
  const designCards = [
    {
      imgURL: '/assets/app-design/desktop/image-airfilter.jpg',
      title: 'airfilter',
      description: 'Solving the problem of poor indoor air quality by filtering the air'
    },
    {
      imgURL: '/assets/app-design/desktop/image-eyecam.jpg',
      title: 'eyecam',
      description: 'Product that lets you edit your favorite photos and videos at any time'
    },
    {
      imgURL: '/assets/app-design/desktop/image-faceit.jpg',
      title: 'faceit',
      description: 'Get to meet your favorite internet superstar with the faceit app'
    },
    {
      imgURL: '/assets/app-design/desktop/image-todo.jpg',
      title: 'todo',
      description: 'A todo app that features cloud sync with light and dark mode'
    },
    {
      imgURL: '/assets/app-design/desktop/image-loopstudios.jpg',
      title: 'loopstudios',
      description: 'A VR experience app made for Loopstudios'
    },
  ]

  return (
    <>
      <Head>
        <title>Designo | App Design</title>
        <meta name="description" content="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips." />
      </Head>

      <main className={styles.main}>
        <Banner
          title="App Design"
          description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
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
            title="web design"
            imgURL="/assets/home/desktop/image-web-design-small.jpg"
            pageURL="/design/web-design"
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