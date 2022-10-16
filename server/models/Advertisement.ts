import { DataTypes } from 'sequelize';
import sequelize from '../database/config/connection';

const Advertisement = sequelize.define('Advertisement', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Advertisement;
