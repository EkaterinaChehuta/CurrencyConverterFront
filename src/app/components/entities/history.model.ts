import { Conversion } from './conversion.model';
import { CurrencyValues } from './currency-values.model';

export class History {
  id!: number;
  conversion!: Conversion;
  currencyValuesFrom!: CurrencyValues;
  currencyValuesTo!: CurrencyValues;
}
