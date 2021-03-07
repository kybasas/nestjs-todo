import { ExceptionBase } from './exception.base';
import { Exceptions } from './enum.exceptions';

export class NotFoundException extends ExceptionBase {
  constructor(readonly message: string = 'Not found') {
    super(message);
  }

  readonly name = Exceptions.notFound;
}
