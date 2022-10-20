import {
  Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes,
} from 'sequelize';

import sequelize from '../database/config/connection';

interface PaymentModelInterface extends Model<InferAttributes<PaymentModelInterface>,
InferCreationAttributes<PaymentModelInterface>> {
  id: CreationOptional<number>;
  title: string,
  description: string,
}
const Payment = sequelize.define<PaymentModelInterface>(
  'Payment',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
);

export default Payment;
