import { DataTypes, Model } from 'sequelize';
import { sequelize } from './db/connection';
import { User } from './User';

export interface CreationTodoInterface {
  title: string;
  description: string;
  userId: string;
}
interface AttributeTodoInterface {
  ID: number;
  title: string;
  description: string;
  userId: string;
}
export interface TodoInterface extends AttributeTodoInterface {
  createdAt: Date;
  updatedAt: Date;
}

export class Todo extends Model<AttributeTodoInterface, CreationTodoInterface> {
  public ID!: number;
  public title!: string;
  public description!: string;
  public userId!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Todo.init(
  {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'Todos',
    sequelize,
    paranoid: true,
  }
);
Todo.sync();
User.hasMany(Todo, { foreignKey: 'userId' });
Todo.belongsTo(User, { foreignKey: 'userId' });
