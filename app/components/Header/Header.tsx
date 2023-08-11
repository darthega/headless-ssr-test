import {
  NavigationAllDocument,
  SuSuNavigationMenuCollection,
} from "@gql/generated/graphql";

import { menuStructure } from "@components/MainMenu/utils/menuStructure";
import { getClient } from "@lib/client";
import { getCurrencyConfiguration } from "@lib/configuration";
import { HeaderClient } from "./HeaderClient";

export async function Header() {
  const { data } = await getClient().query<{
    suSuNavigationMenuCollection: SuSuNavigationMenuCollection;
  }>({
    query: NavigationAllDocument,
    variables: {
      slug: "website-menu",
      currencyCode: "EUR",
    },
  });
  const currencyConfiguration = await getCurrencyConfiguration();

  const _menuStructure = menuStructure(data.suSuNavigationMenuCollection);

  return (
    <HeaderClient
      structure={_menuStructure}
      currencyConfiguration={currencyConfiguration}
    />
  );
}
