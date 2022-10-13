import {
  DataTypes,
} from 'sequelize';
import sequelize from '../database/config/connection';

const Transaction = sequelize.define(
  'Transactions',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    creation_date: {
      type: DataTypes.DATE,
      defaultValue: Date(),
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
);

export default Transaction;
