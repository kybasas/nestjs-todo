export const currencies = ['рубль', 'доллар'] as const;

export type CurrenciesType = typeof currencies[number];
