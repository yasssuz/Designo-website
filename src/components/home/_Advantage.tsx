import styles from '../../styles/components/home/Advantage.module.scss'

interface AdvantageProps {
  title: string
  description: string
}

export function Advantage(props: AdvantageProps) {
  const { title, description } = props

  return (
    <li className={styles.card}>
      <div className={styles.illustration}>
        <img src={`/assets/home/desktop/illustration-${title}.svg`} alt="advantage" />
      </div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  )
}