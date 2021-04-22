import styles from '../styles/components/DesignBanner.module.scss'

interface DesignBannerProps {
  title: string
  description: string
}

export const DesignBanner: React.FC<DesignBannerProps> = ({title, description}) => {
  return (
    <div className={`padding-container ${styles.bannerContainer}`}>
      <h1 className="title-primary-white">{title}</h1>
      <p className="paragraph-primary">{description}</p>
    </div>
  )
}