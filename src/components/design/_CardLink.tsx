import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/components/design/DesignLink.module.scss'

interface DesignLinkProps {
  title: string
  imgURL: string
  pageURL: string
}

export const DesingLink: React.FC<DesignLinkProps> = (props) => {
  return (
    <li className={styles.cardContainer}>
      <Link href={`${props.pageURL}`}>
        <a>
          <Image
            src={props.imgURL}
            layout='fill'
            objectFit='cover'
            className={styles.background}
            alt={`${props.title} background`}
          />
          <h1 className="title-primary-white">{props.title}</h1>
          <span>
            View projects
            <img
              src="/assets/shared/desktop/icon-right-arrow.svg"
              style={{ height: 10, width: 7 }}
              alt={`go to ${props.title}`}
            />
          </span>
        </a>
      </Link>
    </li>
  )
}