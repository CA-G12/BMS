import {
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  Model,
  CreationOptional,
} from 'sequelize';
import sequelize from '../database/config/connection';

interface AnnouncementsModel
  extends Model<
  InferAttributes<AnnouncementsModel>,
  InferCreationAttributes<AnnouncementsModel>
  > {
  id: CreationOptional<string>
  Title: string
  StartDate: Date
  EndDate: Date
}

const Announcements = sequelize.define<AnnouncementsModel>('Announcements', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  Title: {
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
});

export default Announcements;
