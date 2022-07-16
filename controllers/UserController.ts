import { NextFunction, Request, Response } from 'express';
import { login, register } from '../services/UserAuthService';

export class UserController {
  constructor() {}
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await register(req.body);
      return res.status(200).send({ token: token });
    } catch (error) {
      next(error);
    }
  };
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await login(req.body);
      return res.status(200).send({ token: token });
    } catch (error) {
      next(error);
    }
  };
}
