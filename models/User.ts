import { DataTypes, Model } from 'sequelize';
import { sequelize } from './db/connection';

export interface CreationUserInterface {
  name: string;
  email: string;
  password: string;
}
interface AttributesUserInterface {
  ID: number;
  name: string;
  email: string;
  password: string;
}
export interface UserInterface extends AttributesUserInterface {
  createdAt: Date;
  updatedAt: Date;
}

export class User extends Model<
  AttributesUserInterface,
  CreationUserInterface
> {
  public ID!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Users',
    sequelize,
    paranoid: true,
  }
);
User.sync();