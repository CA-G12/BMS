import {
  Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes, DecimalDataType,
} from 'sequelize';

import sequelize from '../database/config/connection';

interface FlatModelInterface extends Model<InferAttributes<FlatModelInterface>,
InferCreationAttributes<FlatModelInterface>> {
  id: CreationOptional<number>;
  flat_number: number,
  area: number,
  notes: string,
  is_active: boolean,
}
const Flat = sequelize.define<FlatModelInterface>('Flat', {
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
});

export default Flat;
