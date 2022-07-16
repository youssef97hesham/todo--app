import { DuplicateEmailException } from '../Exceptions/user/DuplicateEmailException';
import { LoginFailedException } from '../Exceptions/user/LoginFailedException';
import {
  comparePassword,
  hashPassword,
  signToken,
} from '../helpers/AuthHelper';
import {
  LoginBodyInterface,
  RegisterBodyInterface,
} from '../Interfaces/UserAuthInterfaces';
import { createUser, findUser } from '../repository/UserRepository';

export const login = async (body: LoginBodyInterface): Promise<string> => {
  try {
    const { email, password } = body;
    const user = await findUser({ email: email });
    if (!user) throw new LoginFailedException();
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) throw new LoginFailedException();
    const token = signToken(user.ID);
    return token;
  } catch (error) {
    throw error;
  }
};
export const register = async (
  body: RegisterBodyInterface
): Promise<string> => {
  try {
    const { email, password, name } = body;
    const hashedPassword = await hashPassword(password);
    const createdUser = await createUser({ ...body, password: hashedPassword });
    if (!createdUser) throw new DuplicateEmailException();
    const token = signToken(createdUser.ID);
    return token;
  } catch (error) {
    throw error;
  }
};
