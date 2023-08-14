import Image from 'next/image'
import styles from '../page.module.css'

export default function tes() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          &nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="/"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  )
}
