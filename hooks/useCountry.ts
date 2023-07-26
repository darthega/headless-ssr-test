import { createContext, useContext } from 'react';

export const CountryContext = createContext({
  countryCode: '',
  ecommerce: {
    currency: {
      code: '',
      format: { code: '', currencySymbolOverride: '', symbol: false },
    },
    payment: { isApplePayEnabled: false, isPayPalExpressEnabled: false },
    shipping: {
      addressField: { houseNumberValidation: false },
      allowedShippingCountries: [],
      available: false,
      defaultPickupPoints: '',
      extraLeadTime: 0,
      isPaazEnabled: false,
      isPickupInStoreEnabled: false,
      primaryTime: 0,
      primaryTimeThreshold: 0,
      warehouses: '',
    },
    tax: {
      hasNetPrice: false,
      isFallbackDWTaxCalculation: false,
      isGlobalTaxEnabled: false,
      noTax: false,
    },
  },
  migrated: false,
  cookieBannerEnabled: false,
  languages: [],
  siteID: '',
  locale: '',
  countryName: '',
});

export const useCountry = () => {
  return useContext(CountryContext);
};
