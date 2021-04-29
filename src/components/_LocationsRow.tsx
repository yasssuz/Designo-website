import styles from '../styles/components/LocationsRow.module.scss';
import { ButtonSecondary } from './_Buttons';

export function LocationsRow() {
  return (
    <ul className={styles.locationsRow}>
      <li className={styles.location} id="canada">
        <div className={styles.circle}>
          <img src="/assets/shared/desktop/illustration-canada.svg" alt="canada location" />
        </div>
        <h2>Canada</h2>
        <ButtonSecondary link="https://">see location</ButtonSecondary>
      </li>
      <li className={styles.location} id="australia">
        <img src="/assets/shared/desktop/illustration-australia.svg" alt="australia location" />
        <h2>australia</h2>
        <ButtonSecondary link="https://">see location</ButtonSecondary>
      </li>
      <li className={styles.location} id="united-kingdom">
        <img src="/assets/shared/desktop/illustration-united-kingdom.svg" alt="united kingdom location" />
        <h2>united kingdom</h2>
        <ButtonSecondary link="https://">see location</ButtonSecondary>
      </li>
    </ul>
  )
}