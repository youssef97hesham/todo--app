import { UnableToPreformOperationTodoException } from '../Exceptions/todo/UnableToPreformOperationTodoException';
import {
  baseTodoRequest,
  deleteTodoRequest,
  updateTodoRequest,
} from '../Interfaces/TodoServiceInterfaces';
import { CreationTodoInterface, TodoInterface } from '../models/Todo';
import {
  createTodo,
  deleteTodo,
  findAllTodo,
  updateTodo,
} from '../repository/TodoRepository';

export const creatingTodo = async (
  body: CreationTodoInterface
): Promise<boolean> => {
  try {
    const success = await createTodo(body);
    if (!success) throw new UnableToPreformOperationTodoException();
    return true;
  } catch (error) {
    throw error;
  }
};
export const deletingTodo = async (
  body: deleteTodoRequest
): Promise<boolean> => {
  try {
    const success = await deleteTodo(body.id, body.userId);
    if (!success) throw new UnableToPreformOperationTodoException();
    return true;
  } catch (error) {
    throw error;
  }
};
export const updatingTodo = async (
  body: updateTodoRequest
): Promise<boolean> => {
  try {
    const success = await updateTodo(body.id, body.userId, {
      title: body.title,
      description: body.description,
    });
    if (!success) throw new UnableToPreformOperationTodoException();
    return true;
  } catch (error) {
    throw error;
  }
};
export const getAllTodos = async (
  userId: number
): Promise<Array<TodoInterface>> => {
  try {
    //TODO: limit and per page
    const Todos = await findAllTodo(userId);
    if (!Todos) throw new UnableToPreformOperationTodoException();
    return Todos;
  } catch (error) {
    throw error;
  }
};
