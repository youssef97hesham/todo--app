export abstract class BaseException extends Error {
  abstract name: string;
  abstract message: string;
  abstract status: number;
  constructor(m: string) {
    super(m);
  }
}
