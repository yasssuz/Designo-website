import Image from "next/image"
import styles from "../styles/components/CardLocation.module.scss"

interface CardLocationProps {
  image: string
  country: string
  office: string
  street: string 
  state: string 
  number: string 
  email: string 
}

export const CardLocation: React.FC<CardLocationProps> = (props) => {
  return (
    <li className={styles.card} key={props.office}>
      <div className={styles.image}>
        <div className={styles.mobile}>
          <Image 
            alt="location image"
            src={props.image}
            layout= 'responsive'
            width= {375}
            height= {320}
            quality={100}
          />
        </div>
        <div className={styles.tablet}>
          <Image 
            alt="location image"
            src={props.image}
            layout= 'fill'
            quality={100}
          />
        </div>
      </div>
      <address className={styles.info}>
        <h2 className={`${styles.country} title-primary-peach`}>{props.country}</h2>
        <div className={styles.specifics}>
          <div>
            <h3 className={`${styles.office} ${styles.sectionDivider}`}>{props.office}</h3>
            <span className={styles.street}>{props.street}</span>
            <span className={styles.state}>{props.state}</span>
          </div>
          <div>
            <h3 className={`${styles.contactInfo} ${styles.sectionDivider}`}>Contact</h3>
            <span className={styles.number}>P: {props.number}</span>
            <span className={styles.email}>M: {props.email}</span>
          </div>
        </div>
      </address>
    </li>
  )
}