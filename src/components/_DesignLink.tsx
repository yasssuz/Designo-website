import Image from 'next/image'
import styles from '../styles/components/DesignLink.module.scss'

interface DesignLinkProps {
  title: string
  imgURL: string
}

export const DesingLink: React.FC<DesignLinkProps> = ({ title, imgURL }) => {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={imgURL}
        layout='fill'
      />
    </div>
  )
}