import Image from "next/image"
import styles from "../../styles/components/locations/CardLocation.module.scss"

interface CardLocationProps {
  image: string
  country: string
  office: string
  street: string
  state: string
  number: string
  email: string
}

export function CardLocation(props: CardLocationProps) {
  const { image, country, office, street, state, number, email } = props

  return (
    <li className={styles.card} key={office}>
      <div className={styles.image}>
        <Image
          quality={100}
          alt="location image"
          src={image}
          layout='fill'
          objectFit="cover"
        />
      </div>
      <address className={styles.info}>
        <h2>{country}</h2>
        <div className={styles.specifics}>
          <div>
            <h3>{office}</h3>
            <span>{street}</span>
            <span>{state}</span>
          </div>
          <div>
            <h3>Contact</h3>
            <span>P: {number}</span>
            <span>M: {email}</span>
          </div>
        </div>
      </address>
    </li>
  )
}