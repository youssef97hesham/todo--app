import { BaseException } from '../BaseException';

export class LoginFailedException extends BaseException {
  name = 'LoginFailedException';
  message = 'Invalid Email or Password';
  status = 403;
  constructor() {
    super('exception');
  }
}
