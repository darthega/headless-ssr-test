"use client";
import { CountriesContext } from "@ssr-test/hooks/useCountries";
import { CountryContext } from "@ssr-test/hooks/useCountry";
import { CustomerContext, defaultCustomer } from "@ssr-test/hooks/useCustomer";
import useSWR from "swr";

const fetcher = (apiURL: string) =>
  fetch(apiURL, {
    headers: {
      "x-headless": "true",
    },
  }).then((res) => res.json());

export function Providers(props: any) {
  const { data } = useSWR("/api/customer", fetcher);
  const { children, currentCountry, countries } = props;
  
  return (
    <CustomerContext.Provider value={data ?? defaultCustomer}>
      <CountriesContext.Provider value={countries}>
        <CountryContext.Provider value={currentCountry}>
          {children}
        </CountryContext.Provider>
      </CountriesContext.Provider>
    </CustomerContext.Provider>
  );
}
