"use client";
import { CountriesContext } from "@headless-commerce/hooks/useCountries";
import { CountryContext } from "@headless-commerce/hooks/useCountry";
import { CustomerContext, defaultCustomer } from "@headless-commerce/hooks/useCustomer";
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
