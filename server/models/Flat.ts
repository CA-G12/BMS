import {
  Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes,
} from 'sequelize';

import sequelize from '../database/config/connection';

interface InferFlatModel extends Model<InferAttributes<InferFlatModel>,
InferCreationAttributes<InferFlatModel>> {
  id: CreationOptional<number>;
  flat_number: number,
  area: number,
  notes: string,
  is_active: boolean,
  UserId: number | null,
}
const Flat = sequelize.define<InferFlatModel>('Flat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  flat_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  area: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default Flat;
