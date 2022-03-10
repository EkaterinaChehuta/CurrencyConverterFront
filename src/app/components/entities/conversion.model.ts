import { Currency } from './currency.model';

export class Conversion {
  id!: number;
  currencyFrom!: Currency;
  currencyTo!: Currency;
  date!: string;
  amount!: number;
  result!: number;
}
