import Sequelize, { Sequelize as SequelizeInstance } from 'sequelize';

import db, { connect } from '../index';
import Unit, { UnitAttrs, UnitModel } from '../interfaces/IUnit';

const sequelize: SequelizeInstance = db || connect();

const unitModel: UnitModel = sequelize.define<Unit, UnitAttrs>('unit', {
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
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
  buildingId: {
    type: Sequelize.INTEGER,
  },
  housingComplexId: {
    type: Sequelize.INTEGER,
  },
},                                                             {
  scopes: {
    onlyBuildings: {
      where: { type: 'building' },
    },
    onlyHousing: {
      where: { type: 'housing-complex' },
    },
    onlyBuildingById (id: number) {
      return { where: { buildingId: id } };
    },
    onlyHousingById (id: number) {
      return { where: { housingComplexId: id } };
    },
  },
});

export default unitModel;
