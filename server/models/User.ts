import {
  DataTypes,
} from 'sequelize';
import sequelize from '../database/config/connection';

const User = sequelize.define(
  'Transactions',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
      defaultValue: Date(),
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
);

export default User;
