import {
  Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes,
} from 'sequelize';

import sequelize from '../database/config/connection';

interface ComplaintsModelInterface extends Model<InferAttributes<ComplaintsModelInterface>,
InferCreationAttributes<ComplaintsModelInterface>> {
  id: CreationOptional<number>;
  title: string,
  description: string,
  is_solved: boolean,
}

const ComplaintsModel = sequelize.define<ComplaintsModelInterface>('Complaint', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_solved: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default ComplaintsModel;
