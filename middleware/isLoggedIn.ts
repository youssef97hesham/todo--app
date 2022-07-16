import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AuthRequest } from '../Interfaces/AuthRequestInterface';
import { findUser } from '../repository/UserRepository';

export const isLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token: string = '';
  if (req.headers && req.headers.authorization) {
    token = req.headers.authorization;
  } else {
    return res.status(401).send({ message: 'Token is missing', status: 401 });
  }
  if (token && process.env.SECRET) {
    jwt.verify(token, process.env.SECRET, async (err, decoded: any) => {
      try {
        if (decoded) {
          const user = await findUser({ ID: decoded.id });
          if (!user)
            return res.status(401).json({
              message: 'User is not available or deleted',
              status: 401,
            });
          (req as AuthRequest).user = user;
        } else
          return res.status(403).json({
            message: 'JWT is malformed',
            status: 401,
          });
      } catch (e) {
        return res
          .status(401)
          .json({ message: 'JWT is malformed', status: 401 });
      }
      return next();
    });
  }
};
