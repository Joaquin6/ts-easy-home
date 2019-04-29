import Sequelize from 'sequelize';
import sequelize from '../../db/index';
import { Building, BuildingAttrs, BuildingModel } from './building.interface';

export const buildingModel: BuildingModel = sequelize.define<Building, BuildingAttrs>('BuildingModel', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

export default buildingModel;
