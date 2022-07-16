import { BaseException } from '../BaseException';

export class DuplicateEmailException extends BaseException {
  name = 'DuplicateEmailException';
  message = 'Email is Already Registered.';
  status = 400;
  constructor() {
    super('exception');
  }
}
