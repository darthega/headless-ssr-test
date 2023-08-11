import { createContext, useContext } from 'react';

import { ICurrencyConfiguration } from '@headless-commerce/types/currencyConfiguration';

export const CurrencyContext = createContext({
    currencyCode: {
        format: {
            displaySymbol: false,
            displayCode: false
        },
        symbol: ''
    }
} as ICurrencyConfiguration);

export const useCurrency = () => useContext(CurrencyContext);
