import {
  DataTypes,
} from 'sequelize';
import sequelize from '../database/config/connection';

const Review = sequelize.define(
  'Reviews',
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
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
    },
    is_shown: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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

export default Review;
