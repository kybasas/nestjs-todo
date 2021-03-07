import { ValueObject } from '../../../../core/base-classes/value-object.base';
import {
  currencies,
  CurrenciesType,
} from '../../../../core/constantns/currencies.constants';
import { ArgumentInvalidException } from '../../../../core/exceptions/argument-invalid.exception';

export interface PriceProps {
  amount: number;
  currency: CurrenciesType;
}
export class Price extends ValueObject<PriceProps> {
  static formatAmount(amount: number) {
    return Number(amount);
  }

  constructor(props: PriceProps) {
    super(props);
    this.props.amount = Price.formatAmount(props.amount);
  }

  get amount() {
    return this.props.amount;
  }

  get currency() {
    return this.props.currency;
  }

  protected validate(props: PriceProps) {
    if (props.amount < 0) {
      throw new ArgumentInvalidException('argument must be greater than zero');
    }
    if (currencies.includes(props.currency)) {
      throw new ArgumentInvalidException('argument must be greater than zero');
    }
  }
}
