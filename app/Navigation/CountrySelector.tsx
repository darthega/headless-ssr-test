import { useCountries } from "@ssr-test/hooks/useCountries";
import { headers } from "next/dist/client/components/headers";

export function CountrySelector() {
  const countries: any = useCountries();

  return (
    <div>
      <label htmlFor="country-selector">Select country</label>
      <select id="country-selector">
        {Object.keys(countries).map((key) => {
          return (
            <option key={key} value={key}>
              {countries[key].locale}
            </option>
          );
        })}
      </select>
    </div>
  );
}
