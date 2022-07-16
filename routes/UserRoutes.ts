import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { ReqBodyValidationMiddleware } from '../middleware/ReqBodyValidationMiddleware';
import {
  loginValidators,
  registerValidators,
} from '../validators/UserAuthValidator';

export const UserRoutes = Router();
const { register, login } = new UserController();
//todo body validation
UserRoutes.post(
  '/register',
  registerValidators(),
  ReqBodyValidationMiddleware,
  register
);
UserRoutes.post(
  '/login',
  loginValidators(),
  ReqBodyValidationMiddleware,
  login
);
