import { BaseException } from '../Exceptions/BaseException';
import { errorLogger } from '../services/ErrorLoggerService';
import { NextFunction, Request, Response } from 'express';

export const erorrHandling = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let BaseResponse: BaseResponse;
  if (err instanceof BaseException) {
    BaseResponse = {
      name: err.name,
      message: err.message,
      status: err.status,
    };
    errorLogger(err);
    return res.status(err.status).send(BaseResponse);
  }
  errorLogger({
    name: 'UnknownException',
    message: err.message,
    stack: err.stack,
    status: 400,
  });
  return res.status(400).json({ message: err.message });
};

interface BaseResponse {
  name: string;
  message: string;
  status: number;
}
