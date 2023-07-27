import { getClient } from "@headless-commerce/lib/client";
import { NavigationAllDocument, SuSuNavigationMenuCollection } from "@gql/generated/graphql";
import { menuStructure } from "@components/Navigation/utils/menuStructure";
import { MainMenu } from "@components/MainMenu/MainMenu";
import { NormalizedCacheObject } from "@apollo/client";

export async function LeftSection() {
  const { data } = await getClient().query<{ suSuNavigationMenuCollection: SuSuNavigationMenuCollection }>({
    query: NavigationAllDocument,
    variables: {
      slug: "website-menu",
      currencyCode: "EUR",
    },
  });

  const _menuStructure = menuStructure(data.suSuNavigationMenuCollection);

  return (
    <>
      <MainMenu structure={_menuStructure} />
    </>
  );
}
