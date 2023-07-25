import { getClient } from "@ssr-test/lib/client";
import { NavigationAllDocument } from "../query";
import { Slider } from "./Slider";

export async function Navigation() {
  const { data } = await getClient().query({
    query: NavigationAllDocument,
    variables: {
      slug: "website-menu",
      currencyCode: "EUR",
    },
  });

  return (
    <Slider data={data} />
  )
}
