import { useState } from 'react'
import styles from '../styles/components/Header.module.scss'

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  function showMenu() {
    setIsMenuActive((prevstate) => !prevstate)
  }

  return (
    <>
      <div className={`${isMenuActive && `${styles.overlayActive}`} ${styles.overlay}`} />
      <header className={styles.header}>
        <div className={styles.content}>
          <img src="/logo.svg" alt="designo logo"/>
          <div 
            className={`${isMenuActive && `${styles.mobileTogglerActive}`} ${styles.mobileToggler}`} 
            onClick={showMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <nav className={`${isMenuActive && `${styles.navigationActive}`} ${styles.navigation}`}>
            <a href="#" className={styles.navLink}>Our Company</a>
            <a href="#" className={styles.navLink}>Locations</a>
            <a href="#" className={styles.navLink}>Contact</a>
          </nav>
        </div>
      </header>
    </>
  )
}