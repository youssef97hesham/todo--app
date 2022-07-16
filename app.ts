require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { allRoutes } from './routes';
import { erorrHandling } from './middleware/ErrorHandlerMiddleWare';
export class App {
  private app: express.Application;
  constructor() {
    this.app = express();
    this.initializeMiddlewares();
  }
  private initializeMiddlewares() {
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(cors());
    this.app.use(allRoutes);
    this.app.use(erorrHandling);
    //todo: winston logger byb error handlerMiddleWare
  }
  public async listen(PORT?: number) {
    const port = PORT ? PORT : +process.env.PORT!;
    this.app.listen(port, process.env.HOST!, () => {
      console.log(
        `Server is listening on port ${port}, running on environment ${process
          .env.NODE_ENV!}`
      );
    });
  }
}
