import Link from 'next/link'
import styles from '../styles/components/ContactCard.module.scss'

export function ContactCard() {
  return (
    <div className={styles.cardOutside}>
      <div className={styles.cardContent}>
        <h2 className="title-primary-white">Let’s talk about your project</h2>
        <p className="paragraph-primary">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
        <Link href="/contact">
          <a>Get in touch</a>
        </Link>    
      </div>
    </div>
  )
}