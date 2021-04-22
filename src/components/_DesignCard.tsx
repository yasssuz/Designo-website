import Image from 'next/image'
import styles from '../styles/components/DesignCard.module.scss'

interface DesignCardProps {
  title: string
  description: string
  imgURL: string
}

export const DesignCard: React.FC<DesignCardProps> = ({title, description, imgURL}) => {
  return (
    <li className={styles.cardContainer}>
      <div className={styles.illustration}>
        <Image 
          src={imgURL}
          layout='fill'
        />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className="paragraph-secondary">{description}</p>
      </div>
    </li>
  )
}