import { DataTypes } from 'sequelize';
import sequelize from '../database/config/connection';

const Bill = sequelize.define('Bill', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total_price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  flat_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_open: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  services: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
  },
});

export default Bill;
