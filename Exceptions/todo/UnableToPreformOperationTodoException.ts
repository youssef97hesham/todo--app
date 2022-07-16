import { BaseException } from '../BaseException';

export class UnableToPreformOperationTodoException extends BaseException {
  name = 'UnableToPreformOperation';
  message = 'Sorry, couldnt preform the required operation.';
  status = 400;
  constructor() {
    super('exception');
  }
}
