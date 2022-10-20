import {
  Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes,
} from 'sequelize';

import sequelize from '../database/config/connection';

interface AnnouncementModelInterface extends Model<InferAttributes<AnnouncementModelInterface>,
InferCreationAttributes<AnnouncementModelInterface>> {
  id: CreationOptional<number>;
  title: string,
  start_date: string,
  end_date: string,
}
const Announcement = sequelize.define<AnnouncementModelInterface>('Announcements', {
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
