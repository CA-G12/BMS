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
  startDate: Date
  endDate: Date
  image: string
}

const Advertisements = sequelize.define<AdvertisementsModel>('Advertisements', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Advertisements;
