import {
  Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes, DecimalDataType,
} from 'sequelize';

import sequelize from '../database/config/connection';

interface BillModelInterface extends Model<InferAttributes<BillModelInterface>,
InferCreationAttributes<BillModelInterface>> {
  id: CreationOptional<number>;
  total_price: DecimalDataType,
  is_open: boolean,
  services: Array<JSON>,
}
const Bill = sequelize.define<BillModelInterface>('Bill', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total_price: {
    type: DataTypes.DECIMAL,
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
