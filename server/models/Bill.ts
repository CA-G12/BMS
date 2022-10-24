/* eslint-disable @typescript-eslint/naming-convention */
import {
  Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes,
} from 'sequelize';

import sequelize from '../database/config/connection';

type billServices = {
  name: string,
  price: number,
  isFixed: boolean,
  description: string,
  isOpen: boolean,
};
interface InferBillModel extends Model<InferAttributes<InferBillModel>,
InferCreationAttributes<InferBillModel>> {
  id: CreationOptional<number>;
  total_price: number,
  is_open: boolean,
  services: Array<billServices>,
}
const Bill = sequelize.define<InferBillModel>('Bill', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_open: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  services: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
  },
});

export default Bill;
