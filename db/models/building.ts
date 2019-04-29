import Sequelize from 'sequelize';

import sequelize from '../index';
import IBuilding, { IBuildingAttrs } from '../interfaces/IBuilding';

export default sequelize.define<IBuilding, IBuildingAttrs>('buildings', {
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
