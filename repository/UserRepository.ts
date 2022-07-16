import { WhereOptions } from 'sequelize';
import { CreationUserInterface, User, UserInterface } from '../models/User';

export const findUser = async (
  user: WhereOptions<Partial<UserInterface>>
): Promise<UserInterface | null> => {
  return await User.findOne({
    where: user,
  });
};

export const createUser = async (
  user: CreationUserInterface
): Promise<UserInterface | null> => {
  try {
    return await User.create(user);
  } catch (error) {
    return null;
  }
};
