import Image from "next/image"
import styles from "../styles/components/AboutCard.module.scss"

interface AboutCardProps {
  title: string
  paragraph1: string
  paragraph2?: string
  imgSrc: string
}

export function AboutCard(props: AboutCardProps) {
  return (
    <div className={styles.card}>
      <div>
        <Image
          src={props.imgSrc}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.content}>
        <h2 className="title-primary title-primary-peach">{props.title}</h2>
        <p className="paragraph-secondary">{props.paragraph1}</p>
        <p className="paragraph-secondary">{props.paragraph2}</p>
      </div>
    </div>
  )
}