import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';
import sequelize from '../database/config/connection';

interface ReviewsModel
  extends Model<
  InferAttributes<ReviewsModel>,
  InferCreationAttributes<ReviewsModel>
  > {
  id: CreationOptional<number>

  title?: string

  description?: Text

  points?: number

  is_shown?: boolean

  creation_date?: Date

  user_id?: number
}

const Reviews = sequelize.define<ReviewsModel>(
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
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    is_shown: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    creation_date: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    user_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
);

export default Reviews;
