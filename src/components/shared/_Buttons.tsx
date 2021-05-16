import { ReactNode } from "react"
import styles from "../../styles/components/shared/Buttons.module.scss"

interface ButtonProps {
  children: ReactNode
  link?: string
}

export function ButtonPrimary({ children }: ButtonProps) {
  return <button
    type="submit"
    className={styles.buttonPrimary}
  >
    {children}
  </button>
}

export function ButtonSecondary({ children, link }: ButtonProps) {
  return <a
    href={link}
    className={styles.buttonSecondary}
  >
    {children}
  </a>
}