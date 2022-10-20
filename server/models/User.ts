import {
  Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes,
} from 'sequelize';

import sequelize from '../database/config/connection';

interface InferUserModel extends Model<InferAttributes<InferUserModel>,
InferCreationAttributes<InferUserModel>> {
  id: CreationOptional<number>;
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  role: string,
  hased_password: string,
}
const User = sequelize.define<InferUserModel>(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    phone_number: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false,
    },
    hased_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

export default User;
