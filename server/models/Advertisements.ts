import {
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  Model,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/config/connection';

interface AdvertisementsModel
  extends Model<
  InferAttributes<AdvertisementsModel>,
  InferCreationAttributes<AdvertisementsModel>
  > {
  id: CreationOptional<number>
  title: string
  description: string
  start_date: Date
  end_date: Date
  image: string
}

const Advertisements = sequelize.define<AdvertisementsModel>('Advertisements', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
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
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Advertisements;
