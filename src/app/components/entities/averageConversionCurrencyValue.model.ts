import { Currency } from './currency.model';

export class AverageConversionCurrencyValue {
  id!: number;
  currencyOne!: Currency;
  currencyTwo!: Currency;
  resultCurrencyOne!: number;
  resultCurrencyTwo!: number;
  count!: number;
}
