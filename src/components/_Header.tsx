import { useState } from 'react'
import styles from '../styles/components/Header.module.scss'

export function Header() {
  const [isActive, setIsActive] = useState(false)

  function showMenu() {
    setIsActive((prevstate) => !prevstate)
  }

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src="/logo.svg" alt="designo logo"/>
        <div 
          className={`${isActive && `${styles.mobileTogglerActive}`} ${styles.mobileToggler}`} 
          onClick={showMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <nav className={`${isActive && `${styles.navigationActive}`} ${styles.navigation}`}>
          <a href="#" className={styles.navLink}>Our Company</a>
          <a href="#" className={styles.navLink}>Locations</a>
          <a href="#" className={styles.navLink}>Contact</a>
        </nav>
      </div>
    </header>
  )
}