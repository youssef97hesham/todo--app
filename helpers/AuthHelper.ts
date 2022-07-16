import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};
export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};
export const signToken = (id: number): string => {
  return jwt.sign({ id: id }, process.env.SECRET!);
};
