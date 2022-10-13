import {
  CreationOptional, Model, DataTypes,
} from 'sequelize';
import sequelize from '../database/config/connection';

interface FlatsModel
  extends Model {
  id: CreationOptional<number>
  area : number
  notes: string
  is_active: boolean
  owner_id: number
}

const Flats = sequelize.define<FlatsModel>('Flats', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
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
  owner_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});

export default Flats;
