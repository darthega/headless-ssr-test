export interface ICurrencyConfiguration {
    [currencyCode: string]: ICurrency;
}

export interface ICurrency {
    symbol: string;
    format: IFormat;
}

export interface IFormat {
    displaySymbol: boolean;
    displayCode: boolean;
}

export interface IContentfulCurrency {
    currencyCode: string,
    priceValue: number,
    __typename: string
}
