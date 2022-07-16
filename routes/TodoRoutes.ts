import { Router } from 'express';
import { TodoController } from '../controllers/TodoController';
import { isLoggedIn } from '../middleware/isLoggedIn';
import { ReqBodyValidationMiddleware } from '../middleware/ReqBodyValidationMiddleware';
import {
  todoCreateValidator,
  todoDeleteValidator,
  todoEditValidator,
} from '../validators/TodoValidator';

export const TodoRoutes = Router();
const { createTodo, deleteTodo, updateTodo, fetchAll } = new TodoController();
TodoRoutes.post(
  '',
  isLoggedIn,
  todoCreateValidator(),
  ReqBodyValidationMiddleware,
  createTodo
);
TodoRoutes.delete(
  '',
  isLoggedIn,
  todoDeleteValidator(),
  ReqBodyValidationMiddleware,
  deleteTodo
);
TodoRoutes.put(
  '',
  isLoggedIn,
  todoEditValidator(),
  ReqBodyValidationMiddleware,
  updateTodo
);
TodoRoutes.get('', isLoggedIn, fetchAll);
