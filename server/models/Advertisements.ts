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
  id: CreationOptional<string>
  Title: string
  Description: string
  StartDate: Date
  EndDate: Date
  Image: string
}

const Advertisements = sequelize.define<AdvertisementsModel>('Advertisements', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  StartDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  EndDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Advertisements;
