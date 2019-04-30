import Sequelize, { Sequelize as SequelizeInstance } from 'sequelize';
import db, { connect } from '../../db/index';
import { Unit, UnitAttrs, UnitModel } from './unit.interface';

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
    allowNull: false,
    type: Sequelize.STRING,
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
});

export default unitModel;
