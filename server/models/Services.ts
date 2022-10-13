import {
  InferAttributes, InferCreationAttributes, CreationOptional, Model, DataTypes,
} from 'sequelize';
import sequelize from '../database/config/connection';

interface ServicesModel
  extends Model<
  InferAttributes<ServicesModel>,
  InferCreationAttributes<ServicesModel>
  > {
  id: CreationOptional<number>
  name : string
  price: number
  is_fixed: boolean
  description: string
  is_open: boolean
}

const Services = sequelize.define<ServicesModel>('Services', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.NUMBER,
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

export default Services;
