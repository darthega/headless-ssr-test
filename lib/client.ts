import { ApolloLink, HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const ENVIRONMENT = process.env.NEXT_PUBLIC_NODE_ENV;

const CONTENTFUL_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_SPACE = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const CONTENTFUL_END_POINT = process.env.NEXT_PUBLIC_CONTENTFUL_ENDPOINT;

const CONTENTFUL_URL = `${CONTENTFUL_END_POINT}/content/v1/spaces/${CONTENTFUL_SPACE}/environments/${ENVIRONMENT}`;
const COMMERCE_URL = process.env.NEXT_PUBLIC_PRODUCT_ENDPOINT;

const httpLinkContent = new HttpLink({
  uri: CONTENTFUL_URL,
  headers: {
    Authorization: `Bearer ${CONTENTFUL_TOKEN}`,
  },
  credentials: "same-origin",
});

const httpLinkProduct = new HttpLink({
  uri: COMMERCE_URL,
  credentials: "same-origin",
});
const linkContent = ApolloLink.from([httpLinkContent]);
const linkProduct = ApolloLink.from([httpLinkProduct]);

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    // ssrMode: Boolean(ctx),
    link: ApolloLink.split(
      (operation) => {
        return operation.getContext()?.clientName == "commerceLink";
      },
      linkProduct,
      linkContent
    ),
    cache: new NextSSRInMemoryCache(), //.restore(initialState),
  });
});
