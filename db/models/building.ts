import Sequelize, { Sequelize as SequelizeInstance } from 'sequelize';

import db, { connect } from '../index';
import { Building, BuildingAttrs, BuildingModel } from '../interfaces/IBuilding';
import Unit from './unit';

const sequelize: SequelizeInstance = db || connect();

const buildingModel: BuildingModel = sequelize.define<Building, BuildingAttrs>('building', {
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

const baseData = {
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const buildings = [{
  ...baseData,
  id: 123,
  name: 'AT&T tower',
  city: 'New York',
}, {
  ...baseData,
  id: 124,
  name: 'Floyd tower',
  city: 'Los Angeles',
}];
