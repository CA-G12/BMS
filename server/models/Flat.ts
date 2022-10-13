import { DataTypes } from 'sequelize';
import sequelize from '../database/config/connection';

const Flat = sequelize.define('Flat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  area: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Flat;
