import { ExceptionBase } from './exception.base';
import { Exceptions } from './enum.exceptions';

export class ArgumentLengthIsLongException extends ExceptionBase {
  readonly name = Exceptions.argumentIsVeryLong;
}
