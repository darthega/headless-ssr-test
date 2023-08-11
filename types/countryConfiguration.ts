export interface CountryConfiguration {
  countryCode: string;
  ecommerce: {
    currency?: {
      code: string;
      format: {
        code: string;
        currencySymbolOverride: string;
        symbol: boolean;
      };
    };
    payment?: {
      isApplePayEnabled: boolean;
      isPayPalExpressEnabled: boolean;
    };
    shipping?: {
      addressField: { houseNumberValidation: boolean };
      allowedShippingCountries: string[];
      available: boolean;
      defaultPickupPoints: string;
      extraLeadTime: number;
      isPaazEnabled: boolean;
      isPickupInStoreEnabled: boolean;
      primaryTime: number;
      primaryTimeThreshold: number;
      warehouses: string;
    };
    tax?: {
      hasNetPrice: boolean;
      isFallbackDWTaxCalculation: boolean;
      isGlobalTaxEnabled: boolean;
      noTax: boolean;
    };
  };
  migrated: boolean;
  cookieBannerEnabled?: boolean;
  languages: string[];
  siteID: string;
  locale: string;
  countryName: string;
}
