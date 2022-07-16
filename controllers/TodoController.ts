import { NextFunction, Response } from 'express';
import { UserNotFoundException } from '../Exceptions/user/UserNotFoundException';
import { AuthRequest } from '../Interfaces/AuthRequestInterface';
import {
  creatingTodo,
  deletingTodo,
  getAllTodos,
  updatingTodo,
} from '../services/TodoService';

export class TodoController {
  constructor() {}
  createTodo = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      if (!req.user) throw new UserNotFoundException();
      const result = await creatingTodo({ ...req.body, userId: req.user.ID });
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };
  updateTodo = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      if (!req.user) throw new UserNotFoundException();
      const result = await updatingTodo({ ...req.body, userId: req.user.ID });
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };
  deleteTodo = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      if (!req.user) throw new UserNotFoundException();
      const result = await deletingTodo({ ...req.body, userId: req.user.ID });
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };
  fetchAll = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      if (!req.user) throw new UserNotFoundException();
      const result = await getAllTodos(req.user.ID);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };
}
