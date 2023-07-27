"use client";
import useSWR from "swr";

import { CountriesContext } from "@hooks/useCountries";
import { CountryContext } from "@hooks/useCountry";
import { CustomerContext, defaultCustomer } from "@hooks/useCustomer";

const fetcher = async (apiURL: string) => {
  const res = await fetch(apiURL, {
    headers: {
      "x-headless": "true",
    },
  });
  return await res.json();
};

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
