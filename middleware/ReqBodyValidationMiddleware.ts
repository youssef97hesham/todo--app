import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { Result, ValidationError, validationResult } from 'express-validator';

export const ReqBodyValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    let validationErros: ValidationError[] = errors.array().map((err) => {
      return err;
    });
    return res.status(422).json({ errors: validationErros });
  }
  next();
};
