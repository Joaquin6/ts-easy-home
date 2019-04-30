import { QueryInterface } from 'sequelize';

const baseData = {
  createdAt: new Date(),
  updatedAt: new Date(),
  constructionDate: new Date(),
};
const housingComplex = [{
  ...baseData,
  name: 'Sunny Suites',
  city: 'Los Angeles',
}, {
  ...baseData,
  name: 'Stormy Suites',
  city: 'Los Angeles',
}];

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert('housing-complexes', housingComplex, {});

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('housing-complexes', null, {});

export default { up, down };
