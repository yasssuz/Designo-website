import { useState } from 'react'
import styles from '../styles/components/Header.module.scss'
import Link from 'next/link'

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  function handleMenu() {
    setIsMenuActive((prevstate) => !prevstate)
  }

  return (
    <>
      <div className={`${isMenuActive && `${styles.overlayActive}`} ${styles.overlay}`} />
      <header className={styles.header}>
        <div className={`${styles.content} padding-container`}>
          <Link href="/">
            <a href="#" className={styles.aAroundLogo}>
              <img 
                src="/logo.svg" 
                alt="designo logo" 
                style={{ height: 27, width: 202 }} 
              />
            </a>
          </Link>
          <div
            className={`${isMenuActive && `${styles.mobileTogglerActive}`} ${styles.mobileToggler}`}
            onClick={handleMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <nav className={`${isMenuActive && `${styles.navigationActive}`} ${styles.navigation}`}>
            <Link href="/about">
              <a
                href="#"
                className={styles.navLink}
                onClick={handleMenu}
              >
                Our Company
              </a>
            </Link>
            <Link href="/locations">
              <a
                href="#"
                className={styles.navLink}
                onClick={handleMenu}
              >
                Locations
              </a>
            </Link>
            <Link href="/contact">
              <a
                href="#"
                className={styles.navLink}
                onClick={handleMenu}
              >
                Contact
              </a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}