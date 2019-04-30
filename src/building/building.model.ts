import Sequelize, { Sequelize as SequelizeInstance } from 'sequelize';

import db, { connect } from '../../db/index';
import { Building, BuildingAttrs, BuildingModel } from './building.interface';

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
  city: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

export default buildingModel;
