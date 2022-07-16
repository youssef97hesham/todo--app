import express from 'express';
import { UserInterface } from '../models/User';
export interface AuthRequest extends express.Request {
  user?: UserInterface;
}
