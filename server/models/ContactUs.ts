import {
  Sequelize,
  Model,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

const sequelize = new Sequelize('../database/config/connection');

interface ContactUsModel
  extends Model< InferAttributes <ContactUsModel>,
  InferCreationAttributes <ContactUsModel> > {
  id: CreationOptional<number>;
  name: string;
  email: string;
  phone: string;
  subject: string;
  description: string;
  creation_date: Date;
}

const ContactUsModel = sequelize.define<ContactUsModel>(
  'ContactUs',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.NUMBER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
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
    creation_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
);

export default ContactUsModel;
