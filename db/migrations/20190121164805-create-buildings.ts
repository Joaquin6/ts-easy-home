import Bluebird from 'bluebird';
import { QueryInterface, SequelizeStatic } from 'sequelize';

export const up = (queryInterface: QueryInterface, sequelize: SequelizeStatic): Bluebird<void> =>
  queryInterface.createTable('buildings', {
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
    createdAt: {
      allowNull: false,
      type: sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: sequelize.DATE,
    },
  });

export const down = (queryInterface: QueryInterface): Bluebird<void> =>
  queryInterface.dropTable('buildings');

export default { up, down };
