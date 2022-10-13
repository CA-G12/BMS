import {
  InferAttributes, InferCreationAttributes, CreationOptional, Model, DataTypes,
} from 'sequelize';
import sequelize from '../database/config/connection';

interface FlatsModel
  extends Model<
  InferAttributes<FlatsModel>,
  InferCreationAttributes<FlatsModel>
  > {
  id: CreationOptional<number>
  area : number
  notes: string
  is_active: boolean
  creation_date: Date
  owner_id: number
}

const Flats = sequelize.define<FlatsModel>('Flats', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
  },
  area: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,

  },
  creation_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  owner_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});

export default Flats;
