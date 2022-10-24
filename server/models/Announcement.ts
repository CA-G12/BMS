import {
  Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes,
} from 'sequelize';

import sequelize from '../database/config/connection';

interface InferAnnouncementModel extends Model<InferAttributes<InferAnnouncementModel>,
InferCreationAttributes<InferAnnouncementModel>> {
  id: CreationOptional<number>;
  title: string,
  start_date: string,
  end_date: string,
}
const Announcement = sequelize.define<InferAnnouncementModel>('Announcements', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Announcement;
