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
  extends Model< InferAttributes <ComplaintsModel>,
  InferCreationAttributes <ComplaintsModel> > {
  id: CreationOptional<number>;
  title: string;
  description: string;
  creation_date: Date;
  is_solved: boolean;
  user_id: number;
}

const ComplaintsModel = sequelize.define<ComplaintsModel>('Complaint', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
  },

  title: {
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

  is_solved: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  user_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});

export default ComplaintsModel;
