import { QueryInterface } from 'sequelize';
import { buildings } from '../models/building';

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert('buildings', buildings, {});

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('buildings', null, {});

export default { up, down };
