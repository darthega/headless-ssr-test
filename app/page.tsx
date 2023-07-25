import styles from './page.module.css'
import { Navigation } from './Navigation/Navigation';

export default async function Home() {
  return (
    <main className={styles.main}>
      <header>
        <Navigation />
      </header>
    </main>
  )
}
