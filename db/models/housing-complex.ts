import Sequelize, { Sequelize as SequelizeInstance } from 'sequelize';

import db, { connect } from '../index';
import HousingComplex, { HousingComplexAttrs, HousingComplexModel } from '../interfaces/IHousingComplex';
import Unit from './unit';

const sequelize: SequelizeInstance = db || connect();

const housingComplexModel: HousingComplexModel = sequelize.define<HousingComplex, HousingComplexAttrs>('housing-complex', {
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

const baseData = {
  createdAt: new Date(),
  updatedAt: new Date(),
  constructionDate: new Date(),
};

export const housingComplex = [{
  ...baseData,
  id: 567,
  name: 'Sunny Suites',
  city: 'Los Angeles',
}, {
  ...baseData,
  id: 568,
  name: 'Stormy Suites',
  city: 'Los Angeles',
}];
