import {
  Sequelize,
  Model,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

const sequelize = new Sequelize('../database/config/connection');

interface ComplaintsModel
  extends Model<InferAttributes<ComplaintsModel>,
  InferCreationAttributes<ComplaintsModel>> {
  id: CreationOptional<number>;
  title: string;
  description: string;
  creationDate: Date;
  isSolved: boolean;
  userId: number;
}

const ComplaintsModel = sequelize.define<ComplaintsModel>('Complaint', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  creationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  isSolved: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  userId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});

export default ComplaintsModel;
