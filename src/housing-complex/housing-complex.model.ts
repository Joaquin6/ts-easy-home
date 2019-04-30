import Sequelize, { Sequelize as SequelizeInstance } from 'sequelize';

import db, { connect } from '../../db/index';
import Unit from '../unit/unit.model';
import HousingComplex, { HousingComplexAttrs, HousingComplexModel } from './housing-complex.interface';

const sequelize: SequelizeInstance = db || connect();

const housingComplexModel: HousingComplexModel = sequelize.define<HousingComplex, HousingComplexAttrs>('HousingComplexModel', {
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
  constructionDate: {
    type: Sequelize.DATE,
  },
});

housingComplexModel.hasMany(Unit);

export default housingComplexModel;
