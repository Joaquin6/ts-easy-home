import Sequelize from 'sequelize';

import sequelize from '../index';
import HousingComplex, { HousingComplexAttrs } from '../interfaces/IHousingComplex';

export default sequelize.define<HousingComplex, HousingComplexAttrs>('HousingComplexModel', {
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
