import { QueryInterface } from 'sequelize';

const baseData = {
  createdAt: new Date(),
  updatedAt: new Date(),
};
const buildings = [{
  ...baseData,
  name: 'AT&T tower',
  city: 'New York',
}, {
  ...baseData,
  name: 'Floyd tower',
  city: 'Los Angeles',
}];

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert('buildings', buildings, {});

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('buildings', null, {});

export default { up, down };
