import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';
import sequelize from '../database/connection';

export class Reviews extends Model<
InferAttributes<Reviews>,
InferCreationAttributes<Reviews>
> {
  declare id: CreationOptional<number>;

  declare title?: string;

  declare description?: Text;

  declare points?: number;

  declare is_shown?: boolean;

  declare creation_date?: Date;

  declare user_id?: number;
}

Reviews.init(
  {
    id: {
      type: DataTypes.GUID,
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
  {
    sequelize,
  },
);

export default Reviews;
