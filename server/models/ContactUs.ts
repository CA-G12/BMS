import {
  Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes,
} from 'sequelize';

import sequelize from '../database/config/connection';

interface ContactUsModelInterface extends Model<InferAttributes<ContactUsModelInterface>,
InferCreationAttributes<ContactUsModelInterface>> {
  id ?: CreationOptional<number>;
  name: string,
  email: string,
  phone: string,
  subject: string,
  description: string,
}
const ContactUsModel = sequelize.define<ContactUsModelInterface>(
  'ContactUs',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

export default ContactUsModel;
