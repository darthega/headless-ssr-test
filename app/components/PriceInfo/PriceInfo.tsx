"use client";

import { useCountry } from "@hooks/useCountry";
import { useCurrency } from "@hooks/useCurrency";

export function PriceInfo({ price }: { price: number }) {
  const countryConfig = useCountry();
  const currencyCode = countryConfig?.ecommerce?.currency?.code;
  const currencyConfiguration = useCurrency();

  if (!currencyCode?.length) {
    return <></>;
  }

  const { format, symbol } = currencyConfiguration[currencyCode];
  const formattedPrice = `${format?.displaySymbol ? symbol : ""}${price} ${
    format?.displayCode ? currencyCode : ""
  }`;

  return <>{formattedPrice}</>;
}
