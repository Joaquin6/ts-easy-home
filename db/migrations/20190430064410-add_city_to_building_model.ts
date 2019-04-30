import Bluebird from 'bluebird';
import Sequelize, { QueryInterface, SequelizeStatic } from 'sequelize';

export const up = (queryInterface: QueryInterface, sequelize: SequelizeStatic): Bluebird<void> =>
  queryInterface.addColumn('buildings', 'city', Sequelize.STRING);

export const down = (queryInterface: QueryInterface): Bluebird<void> =>
  queryInterface.removeColumn('buildings', 'city');

export default { up, down };
