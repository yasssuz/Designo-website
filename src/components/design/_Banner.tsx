import styles from '../../styles/components/design/Banner.module.scss'

interface DesignBannerProps {
  title: string
  description: string
}

export function Banner(props: DesignBannerProps) {
  const { title, description } = props

  return (
    <div className={styles.bannerContainer}>
      <h1 className="title-primary title-primary-white">{title}</h1>
      <p className="paragraph-primary">{description}</p>
    </div>
  )
}