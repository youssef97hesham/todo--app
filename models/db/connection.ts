import { Sequelize } from 'sequelize';

const getSequelizeConnection = (): any => {
  return {
    username: process.env.database_user,
    password: process.env.database_password,
    database: process.env.database_name,
    host: process.env.database_host,
    dialect: 'mysql',
    logging: console.log, //use winston logging
    pool: {
      max: 20,
      min: 5,
    },
  };
};

export const sequelize = new Sequelize(getSequelizeConnection());
