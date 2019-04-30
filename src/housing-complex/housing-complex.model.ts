import Sequelize, { Sequelize as SequelizeInstance } from 'sequelize';

import db, { connect } from '../../db/index';
import HousingComplex, { HousingComplexAttrs, HousingComplexModel } from './housing-complex.interface';

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

export default housingComplexModel;
