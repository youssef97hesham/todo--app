import { Router } from 'express';
import { UserRoutes } from './routes/UserRoutes';
import { TodoRoutes } from './routes/TodoRoutes';

export const allRoutes = Router();

allRoutes.use('/user', UserRoutes);
allRoutes.use('/todo', TodoRoutes);