import styles from "./page.module.css";
import { headers } from "next/dist/client/components/headers";

import { Providers } from "@components/Providers/Providers";

export default async function Home() {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const countries = await fetch(`${protocol}://${host}/api/country`).then(
    (res) => res.json()
  );
  const currentCountry = countries.FI;

  return (
    <Providers currentCountry={currentCountry} countries={countries}>
      <main className={styles.main}>
      </main>
    </Providers>
  );
}
