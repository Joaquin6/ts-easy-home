import { QueryInterface, SequelizeStatic } from 'sequelize';

export const up = (queryInterface: QueryInterface, sequelize: SequelizeStatic) =>
  queryInterface.addColumn('buildings', 'city', sequelize.STRING);

export const down = (queryInterface: QueryInterface) =>
  queryInterface.removeColumn('buildings', 'city');

export default { up, down };
