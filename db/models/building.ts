import Sequelize from 'sequelize';

import sequelize from '../index';
import Building, { BuildingAttrs } from '../interfaces/IBuilding';

export default sequelize.define<Building, BuildingAttrs>('BuildingModel', {
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
});
