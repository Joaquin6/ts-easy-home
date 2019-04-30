import { QueryInterface, SequelizeStatic } from 'sequelize';

export const up = (queryInterface: QueryInterface, sequelize: SequelizeStatic) =>
  queryInterface.createTable('housing-complexes', {
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
    city: {
      allowNull: true,
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
    constructionDate: {
      allowNull: false,
      type: sequelize.DATE,
    },
  });

export const down = (queryInterface: QueryInterface) =>
  queryInterface.dropTable('housing-complexes');

export default { up, down };
