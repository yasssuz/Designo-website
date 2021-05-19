import styles from '../../styles/components/shared/CardLink.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface DesignLinkProps {
  title: string
  imgURL: string
  pageURL: string
}

export function DesingLink(props: DesignLinkProps) {
  const { title, imgURL, pageURL } = props

  return (
    <li className={styles.cardContainer}>
      <Link href={pageURL}>
        <a>
          <Image
            src={imgURL}
            layout='fill'
            objectFit='cover'
            className={styles.background}
            alt={`${title} background`}
          />
          <h1 className="title-primary-white">{title}</h1>
          <span>
            View projects
            <img
              src="/assets/shared/desktop/icon-right-arrow.svg"
              style={{ height: 10, width: 7 }}
              alt={`go to ${title}`}
            />
          </span>
        </a>
      </Link>
    </li>
  )
}