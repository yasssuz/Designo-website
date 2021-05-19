import styles from '../../styles/components/shared/ContactCard.module.scss'
import Link from 'next/link'

export function ContactCard() {
  return (
    <div className={styles.cardOutside}>
      <div className={styles.cardContent}>
        <div className="text">
          <h2 className="title-primary title-primary-white">Let’s talk about your project</h2>
          <p className="paragraph-primary">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
        </div>
        <Link href="/contact">
          <a>Get in touch</a>
        </Link>
      </div>
    </div>
  )
}