import { NavigationLink } from "@gql/generated/graphql";

export enum ELinkType {
  CATEGORY = 'Category',
  SFCC_CONTENT_ASSET = 'SFCC Content Asset',
  SFCC_URL = 'SFCC UURL',
  SFCC_CONTROLLER = 'SFCC Controller',
}

export enum ELocaleType {
  RELATIVE_URL = 'RELATIVE URL',
  REFFERENCE_ID = 'REFFERENCE_ID',
  GRAPH_QL = 'GRAPHQL',
}

export const formatLocale = (locale: string, type: ELocaleType): string => {
  if (!locale?.length) {
    return '';
  }

  let formattedLocale;

  switch (type) {
    case ELocaleType.RELATIVE_URL:
      formattedLocale = locale;
      break;
    case ELocaleType.REFFERENCE_ID:
      formattedLocale = locale.slice(0, -2).replace('-', '_') + locale.slice(-2).toUpperCase();
      break;
    case ELocaleType.GRAPH_QL:
      formattedLocale = locale.slice(0, -2) + locale.slice(-2).toUpperCase();
      break;
    default:
      formattedLocale = locale;
      break;
  }

  return formattedLocale;
};

export const generateUrlFromLinkContent = (link: NavigationLink, siteId: string, locale: string): string => {
  let generatedLink;

  const extraParameters = link?.extraParameters?.length ? `&${link?.extraParameters}` : '';
  switch (link?.linkType) {
    case ELinkType.CATEGORY: {
      generatedLink = link?.relativeUrl?.length
        ? `https://${process.env.NEXT_PUBLIC_SFCC_ENVIRONEMENT_BASE_URL}/${formatLocale(
            locale,
            ELocaleType.RELATIVE_URL,
          )}${link?.relativeUrl}${extraParameters}`
        : `https://${
            process.env.NEXT_PUBLIC_SFCC_ENVIRONEMENT_BASE_URL
          }/on/demandware.store/Sites-${siteId}-Site/${formatLocale(
            locale,
            ELocaleType.REFFERENCE_ID,
          )}/Search-Show?cgid=${link?.referenceId}${extraParameters}`;
      break;
    }
    case ELinkType.SFCC_CONTENT_ASSET: {
      generatedLink = link?.relativeUrl?.length
        ? `https://${process.env.NEXT_PUBLIC_SFCC_ENVIRONEMENT_BASE_URL}/${formatLocale(
            locale,
            ELocaleType.RELATIVE_URL,
          )}${link?.relativeUrl}${extraParameters}`
        : `https://${
            process.env.NEXT_PUBLIC_SFCC_ENVIRONEMENT_BASE_URL
          }/on/demandware.store/Sites-${siteId}-Site/${formatLocale(locale, ELocaleType.REFFERENCE_ID)}/Page-Show?cid=${
            link?.referenceId
          }${extraParameters}`;
      break;
    }
    case ELinkType.SFCC_CONTROLLER: {
      const queryParams = extraParameters ? `?${extraParameters}` : '';
      generatedLink = link?.relativeUrl?.length
        ? `https://${process.env.NEXT_PUBLIC_SFCC_ENVIRONEMENT_BASE_URL}/${formatLocale(
            locale,
            ELocaleType.RELATIVE_URL,
          )}${link?.relativeUrl}${extraParameters}`
        : `https://${
            process.env.NEXT_PUBLIC_SFCC_ENVIRONEMENT_BASE_URL
          }/on/demandware.store/Sites-${siteId}-Site/${formatLocale(locale, ELocaleType.REFFERENCE_ID)}/${
            link?.referenceId
          }${queryParams}`;
      break;
    }
    default: {
      generatedLink = link?.absoluteUrl || '';
      break;
    }
  }

  return generatedLink;
};
