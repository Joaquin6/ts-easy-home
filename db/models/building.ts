import Sequelize from 'sequelize';

import sequelize from '../index';

import { Building, BuildingAttrs, BuildingModel } from '../interfaces/IBuilding';
import Unit from './unit';

const buildingModel: BuildingModel = sequelize.define<Building, BuildingAttrs>('BuildingModel', {
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
  city: {
    type: Sequelize.STRING,
  },
});

buildingModel.hasMany(Unit);

export default buildingModel;
