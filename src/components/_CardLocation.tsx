import Image from "next/image"
import styles from "../styles/components/CardLocation.module.scss"

interface CardLocationProps {
  cardData: {
    image: string
    country: string
    office: string
    street: string 
    state: string 
    number: string 
    email: string 
  }
}

export const CardLocation: React.FC<CardLocationProps> = (props) => {
  return (
    <li className={styles.card} key={props.cardData.office}>
      <div className={styles.image}>
        <Image 
          alt="location image"
          src={props.cardData.image}
          layout= 'responsive'
          width= {375}
          height= {320}
          quality={100}
        />
      </div>
      <address className={styles.info}>
        <h2 className={`${styles.country} title-primary-peach`}>{props.cardData.country}</h2>
        <h3 className={`${styles.office} ${styles.sectionDivider}`}>{props.cardData.office}</h3>
        <span className={styles.street}>{props.cardData.street}</span>
        <span className={styles.state}>{props.cardData.state}</span>
        <h3 className={`${styles.contactInfo} ${styles.sectionDivider}`}>Contact</h3>
        <span className={styles.number}>P: {props.cardData.number}</span>
        <span className={styles.email}>M: {props.cardData.email}</span>
      </address>
    </li>
  )
}