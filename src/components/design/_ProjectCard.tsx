import styles from '../../styles/components/design/ProjectCard.module.scss'
import Image from 'next/image'

interface DesignCardProps {
  title: string
  description: string
  imgURL: string
}

export function DesignCard(props: DesignCardProps) {
  const { title, description, imgURL } = props

  return (
    <li className={styles.cardContainer}>
      <div className={styles.illustration}>
        <Image
          src={imgURL}
          layout='fill'
          objectFit='cover'
          alt={title}
        />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p className="paragraph-secondary">{description}</p>
      </div>
    </li>
  )
}