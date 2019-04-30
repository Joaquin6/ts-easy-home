import { QueryInterface, SequelizeStatic } from 'sequelize';

export const up = (queryInterface: QueryInterface, sequelize: SequelizeStatic) =>
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
    createdAt: {
      type: sequelize.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: sequelize.DATE,
      allowNull: true,
    },
    buildingId: {
      type: sequelize.INTEGER,
    },
    housingComplexId: {
      type: sequelize.INTEGER,
    },
  });

export const down = (queryInterface: QueryInterface) =>
  queryInterface.dropTable('units');

export default { up, down };
