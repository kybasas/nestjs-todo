import { v4 as uuidV4, validate } from 'uuid';

import {
  DomainPrimitive,
  ValueObject,
} from '../base-classes/value-object.base';
import { ArgumentInvalidException } from '../exceptions/argument-invalid.exception';

export class ID extends ValueObject<string> {
  static generate(): ID {
    return new ID(uuidV4());
  }

  constructor(value: string) {
    super({ value });
  }

  public get value(): string {
    return this.props.value;
  }

  protected validate({ value }: DomainPrimitive<string>): void {
    if (!validate(value)) {
      throw new ArgumentInvalidException('Incorrect ID format');
    }
  }
}
