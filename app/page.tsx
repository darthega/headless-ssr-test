import { Providers } from "@components/Providers/Providers";
import {
  getCountriesConfiguration,
  getCurrencyConfiguration,
} from "@headless-commerce/lib/configuration";
import styles from "./page.module.css";
import { DEFAULT_LOCALE } from "@headless-commerce/config/config";

export default async function Home() {
  // TODO: Server Component Locale - next-intl
  const locale = DEFAULT_LOCALE;
  const countryCode = new Intl.Locale(locale).region as string;
  const [countries, currencyConfiguration] = await Promise.all([
    getCountriesConfiguration(),
    getCurrencyConfiguration(),
  ]);
  const currentCountry = countries[countryCode];

  return (
    <Providers
      currentCountry={currentCountry}
      countries={countries}
      currencyConfiguration={currencyConfiguration}
    >
      <main className={styles.main}></main>
    </Providers>
  );
}
