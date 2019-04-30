import Bluebird from 'bluebird';
import { QueryInterface, SequelizeStatic } from 'sequelize';

export const up = (queryInterface: QueryInterface, sequelize: SequelizeStatic): Bluebird<void> =>
  queryInterface.createTable('units', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: sequelize.STRING,
    },
    type: {
      allowNull: false,
      type: sequelize.STRING,
    },
  });

export const down = (queryInterface: QueryInterface): Bluebird<void> =>
  queryInterface.dropTable('units');

export default { up, down };
