import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';
import sequelize from '../database/connection';

export class Users extends Model<
InferAttributes<Users>,
InferCreationAttributes<Users>
> {
  declare id: CreationOptional<number>;

  declare first_name?: string;

  declare last_name?: string;

  declare email?: string;

  declare phone_number?: string;

  declare creation_date?: Date;

  declare roles?: 'ADMIN' | 'USER';

  declare hased_password?: string;
}

Users.init(
  {
    id: {
      type: DataTypes.GUID,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    phone_number: {
      type: DataTypes.STRING(14),
      unique: true,
      allowNull: false,
    },
    creation_date: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    roles: {
      type: DataTypes.ENUM('ADMIN', 'USER'),
      allowNull: false,
    },
    hased_password: {
      type: DataTypes.STRING(64),
      validate: {
        is: /^[0-9a-f]{64}$/i,
      },
      allowNull: false,
    },
  },
  {
    sequelize,
  },
);

export default Users;
