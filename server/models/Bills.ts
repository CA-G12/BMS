import { DataTypes } from 'sequelize';
import sequelize from '../database/config/connection';

const Bills = sequelize.define('Bills', {
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
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
});

export default Bills;
