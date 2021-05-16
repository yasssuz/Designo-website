import styles from '../../styles/components/shared/LocationsRow.module.scss';
import { ButtonSecondary } from './_Buttons';

export function LocationsRow() {
  return (
    <ul className={styles.locationsRow}>
      <li className={styles.location} id="canada">
        <div className={styles.circle}>
          <img
            src="/assets/shared/desktop/illustration-canada.svg"
            alt="canada location"
            style={{ height: 202, width: 202 }}
          />
        </div>
        <h2>Canada</h2>
        <ButtonSecondary
          link="https://www.google.it/maps/place/Wellington+St+W,+Toronto,+ON,+Canada/@43.6440163,-79.3967334,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34d9a0737d9f:0xbc1ae74f23fabf4e!8m2!3d43.6440163!4d-79.3945394"
        >
          see location
        </ButtonSecondary>
      </li>
      <li className={styles.location} id="australia">
        <img
          src="/assets/shared/desktop/illustration-australia.svg"
          alt="australia location"
          style={{ height: 202, width: 202 }}
        />
        <h2>australia</h2>
        <ButtonSecondary
          link="https://www.google.it/maps/search/19+Ballone+Strees+New+South+Wales+2443/@-31.6810885,152.5386399,11z/data=!3m1!4b1"
        >
          see location
        </ButtonSecondary>
      </li>
      <li className={styles.location} id="united-kingdom">
        <img
          src="/assets/shared/desktop/illustration-united-kingdom.svg"
          alt="united kingdom location"
          style={{ height: 202, width: 202 }}
        />
        <h2>united kingdom</h2>
        <ButtonSecondary
          link="https://www.google.it/maps/search/13+Colorado+Way+Rhyd-y-fro+SA8+9GA/@51.7320443,-3.8706761,15z/data=!3m1!4b1"
        >
          see location
        </ButtonSecondary>
      </li>
    </ul>
  )
}