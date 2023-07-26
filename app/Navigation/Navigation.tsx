import { getClient } from "@ssr-test/lib/client";
import { Slider } from "./Slider";
import { NavigationAllDocument } from "@ssr-test/gql/generated/graphql";

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
