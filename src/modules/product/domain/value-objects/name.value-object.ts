import {
  DomainPrimitive,
  ValueObject,
} from '../../../../core/base-classes/value-object.base';
import { ArgumentLengthIsLongException } from '../../../../core/exceptions/argument-length-is-long.exception';

export class Name extends ValueObject<DomainPrimitive<string>> {
  static format(email: string): string {
    return email.trim().toLowerCase();
  }

  constructor(value: string) {
    super({ value });
    this.props.value = Name.format(value);
  }

  get name(): string {
    return this.props.value;
  }

  protected validate({ value }: DomainPrimitive<string>) {
    if (value.length > 15)
      throw new ArgumentLengthIsLongException(
        'argument must be less than 15 characters',
      );
  }
}
