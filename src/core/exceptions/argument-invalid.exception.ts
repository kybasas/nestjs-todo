import { ExceptionBase } from './exception.base';
import { Exceptions } from './enum.exceptions';

export class ArgumentInvalidException extends ExceptionBase {
  readonly name = Exceptions.argumentInvalid;
}
