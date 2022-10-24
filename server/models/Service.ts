import {
  Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes,
} from 'sequelize';

import sequelize from '../database/config/connection';

interface InferServiceModel extends Model<InferAttributes<InferServiceModel>,
InferCreationAttributes<InferServiceModel>> {
  id: CreationOptional<number>;
  name: string,
  price: number,
  is_fixed: boolean,
  description: string,
  is_open: boolean
}
const Service = sequelize.define<InferServiceModel>('Service', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_fixed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_open: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default Service;
