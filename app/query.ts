import { gql } from "@apollo/client";

export const SubTextFragmentDoc = gql`
  fragment SubText on NavigationItemLable {
    subText {
      json
      links {
        entries {
          inline {
            ... on PriceInfo {
              sys {
                id
              }
              pricesCollection(
                limit: 2
                where: { currencyCode_in: [$currencyCode, "default"] }
              ) {
                items {
                  currencyCode
                  priceValue
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const ItemLabelFragmentDoc = gql`
  fragment ItemLabel on NavigationItem {
    label {
      text
      icon
      subMenuText
      link {
        linkType
        referenceId
        relativeUrl
        extraParameters
      }
      ...SubText
      promotionEvents {
        promotionClick
        promotionView
        promotionCreative
      }
    }
  }
  ${SubTextFragmentDoc}
`;
export const NavigationAllDocument = gql`
  query navigationAll($slug: String!, $currencyCode: String!) {
    suSuNavigationMenuCollection(where: { slug: $slug }) {
      items {
        slug
        groupCollection(limit: 3) {
          total
          items {
            text
            hasTopDivider
            fontStyling
            itemsCollection(limit: 4) {
              total
              items {
                sys {
                  id
                }
                ...ItemLabel
                groupsCollection {
                  total
                  items {
                    text
                    hasTopDivider
                    fontStyling
                    itemsCollection(limit: 30) {
                      items {
                        sys {
                          id
                        }
                        ...ItemLabel
                        groupsCollection(limit: 3) {
                          total
                          items {
                            text
                            hasTopDivider
                            fontStyling
                            itemsCollection(limit: 6) {
                              total
                              items {
                                sys {
                                  id
                                }
                                ...ItemLabel
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${ItemLabelFragmentDoc}
`;
