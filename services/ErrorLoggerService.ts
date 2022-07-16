import * as winston from 'winston';
import * as path from 'path';
import { BaseException } from '../Exceptions/BaseException';
const { combine, prettyPrint, timestamp, colorize } = winston.format;
const PROJECT_ROOT = path.join(__dirname, '..');
const sharedOptions = {
  handleExceptions: true,
  level: 'info',
  timestamp: true,
};
const options = {
  console: {
    colorize: true,
    json: false,
    ...sharedOptions,
  },
  file: {
    colorize: false,
    filename: `${PROJECT_ROOT}/logs/app.log`,
    json: true,
    maxFiles: 5,
    maxsize: 5242880, // 5MB
    ...sharedOptions,
  },
};
const loggerConfig = {
  exitOnError: false,
  format: combine(timestamp(), prettyPrint(), colorize()),
  level: 'info',
  transports: [
    new winston.transports.Console(options.console),
    new winston.transports.File(options.file),
  ],
};
const logger = winston.createLogger(loggerConfig);
export const errorLogger = (error: BaseException) => {
  logger.error(error);
};
