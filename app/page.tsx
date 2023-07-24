import styles from './page.module.css'
import { getClient } from '@ssr-test/lib/client'
import { NavigationAllDocument } from './query'

export default async function Home() {
  const { data } = await getClient().query({ query: NavigationAllDocument, variables: {
    slug: 'website-menu',
    currencyCode: 'EUR',
  } })

  console.log(data);

  return (
    <main className={styles.main}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
