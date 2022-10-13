import { DataTypes } from 'sequelize';

import sequelize from '../database/config/connection';

const ComplaintsModel = sequelize.define('Complaint', {
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
  is_solved: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default ComplaintsModel;
