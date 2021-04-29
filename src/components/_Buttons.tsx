import { ReactNode } from "react"
import styles from "../styles/components/Buttons.module.scss"

interface ButtonProps {
  children: ReactNode
}

export function ButtonPrimary({ children }: ButtonProps) {
  return <button
    type="submit"
    className={styles.buttonPrimary}
  >
    {children}
  </button>
}