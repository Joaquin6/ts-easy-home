import { QueryInterface } from 'sequelize';
import { housingComplex } from '../models/housing-complex';

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert('housing-complexes', housingComplex, {});

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('housing-complexes', null, {});

export default { up, down };
