import {
  DataTypes,
} from 'sequelize';
import sequelize from '../database/config/connection';

const User = sequelize.define(
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
    roles: {
      type: DataTypes.ENUM('ADMIN', 'USER'),
      allowNull: false,
    },
    hased_password: {
      type: DataTypes.STRING,
      validate: {
        is: /^[0-9a-f]{64}$/i,
      },
      allowNull: false,
    },
  },
);

export default User;
