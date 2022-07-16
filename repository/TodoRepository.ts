import { WhereOptions } from 'sequelize';
import { CreationTodoInterface, Todo, TodoInterface } from '../models/Todo';

export const findAllTodo = async (
  userId: number
): Promise<Array<TodoInterface> | null> => {
  try {
    return await Todo.findAll({
      where: {
        userId: userId,
      },
    });
  } catch (error) {
    return null;
  }
};

export const createTodo = async (
  todo: CreationTodoInterface
): Promise<TodoInterface | null> => {
  try {
    return await Todo.create(todo);
  } catch (error) {
    return null;
  }
};

export const deleteTodo = async (
  id: number,
  userId: number
): Promise<number | null> => {
  try {
    return await Todo.destroy({
      where: {
        ID: id,
        userId: userId,
      },
    });
  } catch (error) {
    return null;
  }
};

export const updateTodo = async (
  id: number,
  userId: number,
  todo: Partial<TodoInterface>
): Promise<Array<number> | null> => {
  try {
    return await Todo.update(todo, {
      where: {
        ID: id,
        userId: userId,
      },
    });
  } catch (error) {
    return null;
  }
};
