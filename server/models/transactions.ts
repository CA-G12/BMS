import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import sequelize from "../database/connection";

export class Transactions extends Model<
InferAttributes<Transactions>,
InferCreationAttributes<Transactions>
> {
  declare id: CreationOptional<number>;

  declare title?: string;

  declare description?: Text;

  declare creation_date?: Date;

  declare user_id?: number;
}

Transactions.init(
  {
    id: {
      type: DataTypes.GUID,
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
  {
    sequelize,
  }
);

export default Transactions;
