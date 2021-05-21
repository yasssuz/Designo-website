import Link from 'next/link';
import styles from '../../styles/components/home/Hero.module.scss'

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className="title-primary title-primary-white">Award-winning custom designs and digital branding solutions</h1>
      <p className="paragraph-primary">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
      <Link href="/about">
        <a href="#" className="button-primary">Learn More</a>
      </Link>
    </section>
  )
}