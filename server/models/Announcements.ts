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
  id: CreationOptional<number>
  title: string
  startDate: Date
  endDate: Date
}

const Announcements = sequelize.define<AnnouncementsModel>('Announcements', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
  },
  title: {
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
});

export default Announcements;
