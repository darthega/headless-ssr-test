import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    US: {
      countryCode: "US",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "USA",
      locale: "en-us",
      countryName: "United States",
      languages: ["en", "es"],
      cookieBannerEnabled: true,
    },
    GB: {
      countryCode: "GB",
      ecommerce: {
        currencyCode: "GBP",
        currency: {
          code: "GBP",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-gb",
      countryName: "United Kingdom",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    CA: {
      countryCode: "CA",
      ecommerce: {
        currencyCode: "CAD",
        currency: {
          code: "CAD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "USA",
      locale: "en-ca",
      countryName: "Canada",
      languages: ["en", "fr"],
      cookieBannerEnabled: true,
    },
    NL: {
      countryCode: "NL",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
        shipping: {
          available: true,
          primaryTime: 1,
          primaryTimeThreshold: 1,
          extraLeadTime: 0,
          warehouses: "AtDc,Shop",
          allowedShippingCountries: ["NL"],
          defaultPickupPoints: "1071GP",
          isPaazlEnabled: true,
          isPickupInStoreEnabled: true,
          isPickupPointEnabled: true,
          addressField: {
            houseNumberValidation: true,
          },
        },
        payment: {
          isApplePayEnabled: true,
          isPayPalExpressEnabled: true,
        },
        tax: {
          hasNetPrice: true,
          noTax: true,
          isGlobalTaxEnabled: true,
          isFallbackDWTaxCalculation: true,
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-nl",
      countryName: "Netherlands",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    DE: {
      countryCode: "DE",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "de-de",
      countryName: "Germany",
      languages: ["de", "en"],
      cookieBannerEnabled: true,
    },
    FR: {
      countryCode: "FR",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "fr-fr",
      countryName: "France",
      languages: ["fr", "en"],
      cookieBannerEnabled: true,
    },
    BE: {
      countryCode: "BE",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-be",
      countryName: "Belgium",
      languages: ["en", "fr"],
      cookieBannerEnabled: true,
    },
    IT: {
      countryCode: "IT",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "it-it",
      countryName: "Italy",
      languages: ["it", "en"],
      cookieBannerEnabled: true,
    },
    CH: {
      countryCode: "CH",
      ecommerce: {
        currencyCode: "CHF",
        currency: {
          code: "CHF",
          format: {
            symbol: false,
            code: true,
          },
        },
        shipping: {
          available: true,
          primaryTime: 2,
          primaryTimeThreshold: 1,
          warehouses: "AtDc,Shop",
          allowedShippingCountries: ["CH"],
          defaultPickupPoints: "8001",
          isPaazlEnabled: false,
          isPickupInStoreEnabled: true,
          isPickupPointEnabled: true,
          addressField: {
            houseNumberValidation: true,
          },
        },
        payment: {
          isApplePayEnabled: true,
          isPayPalExpressEnabled: true,
        },
        tax: {
          hasNetPrice: true,
          noTax: true,
          isGlobalTaxEnabled: true,
          isFallbackDWTaxCalculation: true,
        },
      },
      migrated: true,
      siteID: "INT",
      locale: "en-ch",
      countryName: "Switzerland",
      languages: ["en", "de", "fr", "it"],
      cookieBannerEnabled: true,
    },
    SE: {
      countryCode: "SE",
      ecommerce: {
        currencyCode: "SEK",
        currency: {
          code: "SEK",
          format: {
            symbol: false,
            code: true,
          },
        },
        shipping: {
          available: true,
          primaryTime: 2,
          primaryTimeThreshold: 1,
          warehouses: "AtDc,Shop",
          allowedShippingCountries: ["CH"],
          defaultPickupPoints: "11143",
          isPaazlEnabled: true,
          isPickupInStoreEnabled: true,
          isPickupPointEnabled: true,
          addressField: {
            houseNumberValidation: true,
          },
        },
        payment: {
          isApplePayEnabled: true,
          isPayPalExpressEnabled: true,
        },
        tax: {
          hasNetPrice: true,
          noTax: false,
          isGlobalTaxEnabled: true,
          isFallbackDWTaxCalculation: true,
        },
      },
      migrated: true,
      siteID: "INT",
      locale: "sv-se",
      countryName: "Sweden",
      languages: ["sv", "en"],
      cookieBannerEnabled: true,
    },
    PL: {
      countryCode: "PL",
      ecommerce: {
        currencyCode: "PLN",
        currency: {
          code: "PLN",
          format: {
            symbol: false,
            code: true,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "pl-pl",
      countryName: "Poland",
      languages: ["pl", "en"],
      cookieBannerEnabled: true,
    },
    ES: {
      countryCode: "ES",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "es-es",
      countryName: "Spain",
      languages: ["es", "en"],
      cookieBannerEnabled: true,
    },
    FI: {
      countryCode: "FI",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
        shipping: {
          available: true,
          primaryTime: 1,
          primaryTimeThreshold: 1,
          extraLeadTime: 0,
          warehouses: "AtDc,Shop",
          allowedShippingCountries: ["NL"],
          defaultPickupPoints: "1071GP",
          isPaazlEnabled: true,
          isPickupInStoreEnabled: true,
          isPickupPointEnabled: true,
          addressField: {
            houseNumberValidation: true,
          },
        },
        payment: {
          isApplePayEnabled: true,
          isPayPalExpressEnabled: true,
        },
        tax: {
          hasNetPrice: true,
          noTax: true,
          isGlobalTaxEnabled: true,
          isFallbackDWTaxCalculation: true,
        },
      },
      migrated: true,
      siteID: "INT",
      locale: "en-fi",
      countryName: "Finland",
      languages: ["en", "de"],
      cookieBannerEnabled: true,
    },
    DK: {
      countryCode: "DK",
      ecommerce: {
        currencyCode: "DKK",
        currency: {
          code: "DKK",
          format: {
            symbol: false,
            code: true,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-dk",
      countryName: "Denmark",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    AT: {
      countryCode: "AT",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "de-at",
      countryName: "Austria",
      languages: ["de", "en"],
      cookieBannerEnabled: true,
    },
    NO: {
      countryCode: "NO",
      ecommerce: {
        currencyCode: "NOK",
        currency: {
          code: "NOK",
          format: {
            symbol: false,
            code: true,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-no",
      countryName: "Norway",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    CZ: {
      countryCode: "CZ",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-cz",
      countryName: "Czechia",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    HR: {
      countryCode: "HR",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-hr",
      countryName: "Croatia",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    HU: {
      countryCode: "HU",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-hu",
      countryName: "Hungary",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    EE: {
      countryCode: "EE",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-ee",
      countryName: "Estonia",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    LV: {
      countryCode: "LV",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-lv",
      countryName: "Latvia",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    LT: {
      countryCode: "LT",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-lt",
      countryName: "Lithuania",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    GR: {
      countryCode: "GR",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-gr",
      countryName: "Greece",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    IE: {
      countryCode: "IE",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-ie",
      countryName: "Ireland",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    SG: {
      countryCode: "SG",
      ecommerce: {
        currencyCode: "SGD",
        currency: {
          code: "SGD",
          format: {
            symbol: true,
            code: true,
          },
        },
      },
      migrated: false,
      siteID: "APAC",
      locale: "en-sg",
      countryName: "Singapore",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    IN: {
      countryCode: "IN",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "APAC",
      locale: "en-in",
      countryName: "India",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    AU: {
      countryCode: "AU",
      ecommerce: {
        currencyCode: "AUD",
        currency: {
          code: "AUD",
          format: {
            symbol: true,
            code: true,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-au",
      countryName: "Australia",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    BN: {
      countryCode: "BN",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "APAC",
      locale: "en-bn",
      countryName: "Brunei",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    CN: {
      countryCode: "CN",
      ecommerce: {
        currencyCode: "CNY",
        currency: {
          code: "CNY",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "APAC",
      locale: "zh-cn",
      countryName: "China",
      languages: ["zh", "en"],
      cookieBannerEnabled: true,
    },
    JP: {
      countryCode: "JP",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "APAC",
      locale: "en-jp",
      countryName: "Japan",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    HK: {
      countryCode: "HK",
      ecommerce: {
        currencyCode: "HKD",
        shipping: {
          available: true,
          primaryTime: 1,
          primaryTimeThreshold: 1,
          extraLeadTime: 0,
          warehouses: "AtDc,Shop",
          allowedShippingCountries: ["NL"],
          defaultPickupPoints: "1071GP",
          isPaazlEnabled: true,
          isPickupInStoreEnabled: true,
          isPickupPointEnabled: true,
          addressField: {
            houseNumberValidation: true,
          },
        },
        payment: {
          isApplePayEnabled: true,
          isPayPalExpressEnabled: true,
        },
        tax: {
          hasNetPrice: true,
          noTax: true,
          isGlobalTaxEnabled: true,
          isFallbackDWTaxCalculation: true,
        },
      },
      migrated: true,
      siteID: "APAC",
      locale: "en-hk",
      countryName: "Hong Kong SAR China",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    MO: {
      countryCode: "MO",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "APAC",
      locale: "en-mo",
      countryName: "Macao SAR China",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    MV: {
      countryCode: "MV",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "APAC",
      locale: "en-mv",
      countryName: "Maldives",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    MY: {
      countryCode: "MY",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "APAC",
      locale: "en-my",
      countryName: "Malaysia",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    IR: {
      countryCode: "IR",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-ir",
      countryName: "Iran",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    LU: {
      countryCode: "LU",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-lu",
      countryName: "Luxembourg",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    PT: {
      countryCode: "PT",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-pt",
      countryName: "Portugal",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    RO: {
      countryCode: "RO",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-ro",
      countryName: "Romania",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    CY: {
      countryCode: "CY",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-cy",
      countryName: "Cyprus",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    SK: {
      countryCode: "SK",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-sk",
      countryName: "Slovakia",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    BG: {
      countryCode: "BG",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-bg",
      countryName: "Bulgaria",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    SI: {
      countryCode: "SI",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-si",
      countryName: "Slovenia",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    AE: {
      countryCode: "AE",
      ecommerce: {
        currencyCode: "AED",
        currency: {
          code: "AED",
          format: {
            symbol: false,
            code: true,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-ae",
      countryName: "United Arab Emirates",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    GH: {
      countryCode: "GH",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-gh",
      countryName: "Ghana",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    GI: {
      countryCode: "GI",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-gi",
      countryName: "Gibraltar",
      languages: ["en", "es"],
      cookieBannerEnabled: true,
    },
    GW: {
      countryCode: "GW",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-gw",
      countryName: "Guinea-Bissau",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    IS: {
      countryCode: "IS",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-is",
      countryName: "Iceland",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    JE: {
      countryCode: "JE",
      ecommerce: {
        currencyCode: "GBP",
        currency: {
          code: "GBP",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-je",
      countryName: "Jersey",
      languages: ["en", "fr"],
      cookieBannerEnabled: true,
    },
    LI: {
      countryCode: "LI",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-li",
      countryName: "Liechtenstein",
      languages: ["en", "de"],
      cookieBannerEnabled: true,
    },
    MC: {
      countryCode: "MC",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-mc",
      countryName: "Monaco",
      languages: ["en", "fr"],
      cookieBannerEnabled: true,
    },
    MT: {
      countryCode: "MT",
      ecommerce: {
        currencyCode: "EUR",
        currency: {
          code: "EUR",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-mt",
      countryName: "Malta",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    QA: {
      countryCode: "QA",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "INT",
      locale: "en-qa",
      countryName: "Qatar",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
    DO: {
      countryCode: "DO",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "USA",
      locale: "es-do",
      countryName: "Dominican Republic",
      languages: ["es", "en"],
      cookieBannerEnabled: true,
    },
    GP: {
      countryCode: "GP",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "USA",
      locale: "fr-gp",
      countryName: "Guadeloupe",
      languages: ["fr", "en"],
      cookieBannerEnabled: true,
    },
    MQ: {
      countryCode: "MQ",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "USA",
      locale: "en-mq",
      countryName: "Martinique",
      languages: ["en", "fr"],
      cookieBannerEnabled: true,
    },
    PR: {
      countryCode: "PR",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "USA",
      locale: "es-pr",
      countryName: "Puerto Rico",
      languages: ["es", "en"],
      cookieBannerEnabled: true,
    },
    TT: {
      countryCode: "TT",
      ecommerce: {
        currencyCode: "USD",
        currency: {
          code: "USD",
          format: {
            symbol: true,
            code: false,
          },
        },
      },
      migrated: false,
      siteID: "USA",
      locale: "en-tt",
      countryName: "Trinidad & Tobago",
      languages: ["en"],
      cookieBannerEnabled: true,
    },
  });
}
