import { BaseException } from '../BaseException';

export class UserNotFoundException extends BaseException {
  name = 'UserNotFoundException';
  message = 'Problem finding the user';
  status = 400;
  constructor() {
    super('exception');
  }
}
