import {
  InferAttributes, InferCreationAttributes, CreationOptional, Model, DataTypes,
} from 'sequelize';
import sequelize from '../database/config/connection';

interface BillsModel
  extends Model<
  InferAttributes<BillsModel>,
  InferCreationAttributes<BillsModel>
  > {
  id: CreationOptional<number>
  creation_date : Date
  total_price: number
  flat_id: number
  is_open: boolean
  services: string
}

const Bills = sequelize.define<BillsModel>('Bills', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
  },
  creation_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  flat_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  is_open: {
    type: DataTypes.BOOLEAN,
    allowNull: false,

  },
  services: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Bills;
