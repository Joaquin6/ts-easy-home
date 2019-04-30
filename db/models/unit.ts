import Sequelize from 'sequelize';

import sequelize from '../index';
import Unit, { UnitAttrs, UnitModel } from '../interfaces/IUnit';

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
});

export default unitModel;
