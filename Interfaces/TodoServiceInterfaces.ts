import { TodoInterface } from '../models/Todo';

export interface baseTodoRequest {
  id: number;
  userId: number;
}
export interface deleteTodoRequest extends baseTodoRequest {}
export interface updateTodoRequest extends baseTodoRequest {
  title: string;
  description: string;
}
