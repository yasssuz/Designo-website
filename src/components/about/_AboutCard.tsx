import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "../../styles/components/about/AboutCard.module.scss"

interface AboutCardProps {
  title: string
  paragraph1: string
  paragraph2: string
  imgSrc: string
  id?: string
}

export function AboutCard(props: AboutCardProps) {
  const [secondCard, setSecondCard] = useState(false)

  useEffect(() => props.id === 'secondCard' && setSecondCard(true), [])

  return (
    <div className={`${styles.card} ${secondCard && styles.second}`} id={props.id}>
      <div>
        <Image
          src={props.imgSrc}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt={props.title}
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