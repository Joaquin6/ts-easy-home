import Sequelize, { Sequelize as SequelizeInstance } from 'sequelize';
import db, { connect } from '../../db/index';
import { Unit, UnitAttrs, UnitModel } from './unit.interface';

const sequelize: SequelizeInstance = db || connect();

const unitModel: UnitModel = sequelize.define<Unit, UnitAttrs>('UnitModel', {
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
});

export default unitModel;
