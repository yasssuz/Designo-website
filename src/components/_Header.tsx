import { useState } from 'react'
import styles from '../styles/components/Header.module.scss'
import Link from 'next/link'

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  function showMenu() {
    setIsMenuActive((prevstate) => !prevstate)
  }

  return (
    <>
      <div className={`${isMenuActive && `${styles.overlayActive}`} ${styles.overlay}`} />
      <header className={styles.header}>
        <div className={`${styles.content} padding-container`}>
          <Link href="/">
            <a href="#" className={styles.aAroundLogo}>
              <img src="/logo.svg" alt="designo logo"/>
            </a>
          </Link>
          <div 
            className={`${isMenuActive && `${styles.mobileTogglerActive}`} ${styles.mobileToggler}`} 
            onClick={showMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <nav className={`${isMenuActive && `${styles.navigationActive}`} ${styles.navigation}`}>
            <Link href="/about">
              <a href="#" className={styles.navLink}>Our Company</a>
            </Link>
            <Link href="/locations">
              <a href="#" className={styles.navLink}>Locations</a>
            </Link>
            <Link href="/contact">
              <a href="#" className={styles.navLink}>Contact</a>
            </Link>
          </nav> 
        </div>
      </header>
    </>
  )
}