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
  start_date: Date
  end_date: Date
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
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Announcements;
