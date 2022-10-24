import {
  Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes,
} from 'sequelize';

import sequelize from '../database/config/connection';

interface InferAdvertisementModel extends Model<InferAttributes<InferAdvertisementModel>,
InferCreationAttributes<InferAdvertisementModel>> {
  id: CreationOptional<number>;
  title: string,
  description: string,
  start_date: string,
  end_date: string,
  image: string,
}
const Advertisement = sequelize.define<InferAdvertisementModel>('Advertisement', {
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
