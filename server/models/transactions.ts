import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';
import sequelize from '../database/config/connection';

interface TransactionsModel
  extends Model<
  InferAttributes<TransactionsModel>,
  InferCreationAttributes<TransactionsModel>
  > {
  id: CreationOptional<number>

  title?: string

  description?: Text

  creation_date?: Date

  user_id?: number
}

const Transactions = sequelize.define<TransactionsModel>(
  'Transactions',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    creation_date: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    user_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
);

export default Transactions;
