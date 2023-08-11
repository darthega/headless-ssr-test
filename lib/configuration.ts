import { get } from "@vercel/edge-config";
import { NextURL } from "next/dist/server/web/next-url";
import { Router } from "next-translate-routes";

import { CountryConfiguration } from "@headless-commerce/types/countryConfiguration";
import { ICurrencyConfiguration } from "@headless-commerce/types/currencyConfiguration";
import { DEFAULT_LOCALE } from "@headless-commerce/config/config";

export async function getCurrentCountryConfig(value: NextURL | Router) {
  if (value.locale) {
    const countryCode = new Intl.Locale(value.locale).region as string;
    return await getCountryConfiguration(countryCode);
  }
  return null;
}

export async function getCountryConfiguration(
  countryCode: string
): Promise<CountryConfiguration | null> {
  const countriesConfiguration = await getCountriesConfiguration();

  return countriesConfiguration[countryCode] ?? null;
}

export async function getCurrencyConfiguration() {
  return (await get("currencies")) as ICurrencyConfiguration;
}

const _countryNames = new Intl.DisplayNames(["en"], { type: "region" });

export async function getCountriesConfiguration(): Promise<{
  [x: string]: CountryConfiguration;
}> {
  const defaultCode = new Intl.Locale(DEFAULT_LOCALE).region as string;
  const defaultName = _countryNames.of(defaultCode) as string;
  const defaultConfig = {
    countryCode: defaultCode,
    ecommerce: {},
    migrated: false,
    siteID: process.env.SFCC_SITE_ID as string,
    locale: DEFAULT_LOCALE,
    countryName: defaultName,
    languages: [],
  };

  const countriesConfiguration:
    | { [x: string]: CountryConfiguration }
    | undefined = await get("countries");

  if (!countriesConfiguration) {
    return { [defaultCode]: defaultConfig };
  }

  const configurations: { [x: string]: CountryConfiguration } = {};

  Object.keys(countriesConfiguration).forEach((key) => {
    const countryConfiguration: CountryConfiguration =
      countriesConfiguration[key];
    const countryName = _countryNames.of(key) as string;
    const language = countryConfiguration.languages[0] ?? "en";
    const locale = `${language}-${key}`.toLocaleLowerCase();

    configurations[key] = {
      ...defaultConfig,
      ...countryConfiguration,
      countryCode: key,
      countryName,
      locale,
    };
  });

  return configurations;
}

export const scapiHostname = () =>
  `https://${process.env.SFCC_SHORTCODE}.api.commercecloud.salesforce.com`;
const ocapiHostname = () =>
  `https://${process.env.NEXT_PUBLIC_SFCC_ENVIRONEMENT_BASE_URL}`;
const ocapiVersion = process.env.NEXT_PUBLIC_SFCC_OCAPI_VERSION ?? "v23_2";
export function ocapiShopAPIBaseUrl(siteId: string) {
  return ocapiHostname() + `/s/` + siteId + "/dw/shop/" + ocapiVersion;
}
