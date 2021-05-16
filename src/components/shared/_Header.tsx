import { useState } from 'react'
import styles from '../../styles/components/shared/Header.module.scss'
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
        <div className={styles.content}>
          <Link href="/">
            <a href="#" className={styles.aroundLogo}>
              <img
                src="/logo.svg"
                alt="designo logo"
                style={{ height: 27, width: 202 }}
              />
            </a>
          </Link>
          <div
            className={`${isMenuActive && `${styles.active}`} ${styles.mobileToggler}`}
            onClick={handleMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <nav className={`${isMenuActive && `${styles.active}`} ${styles.navigation}`}>
            <Link href="/about">
              <a href="#" onClick={handleMenu}>Our Company</a>
            </Link>
            <Link href="/locations">
              <a href="#" onClick={handleMenu}>Locations</a>
            </Link>
            <Link href="/contact">
              <a href="#" onClick={handleMenu}>Contact</a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}