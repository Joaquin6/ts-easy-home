import { QueryInterface } from 'sequelize';
import { buildings } from '../models/building';
import { housingComplex } from '../models/housing-complex';

const types = ['building', 'housing-complex'];
const getType = () => types[Math.floor(Math.random() * types.length)];
const getHousing = () => buildings[Math.floor(Math.random() * buildings.length)];
const getBuilding = () => housingComplex[Math.floor(Math.random() * housingComplex.length)];
const baseData = {
  createdAt: new Date(),
  updatedAt: new Date(),
};

const generateData = (max = 25) => {
  const data = [];

  for (let index = 0; index < max; index += 1) {
    const type = getType();
    const { id: propertyId, name } = type === 'housing-complex' ? getHousing() : getBuilding();
    const buildingId = type === 'building' ? propertyId : null;
    const housingComplexId = type === 'housing-complex' ? propertyId : null;

    data.push({ ...baseData, name, type, buildingId, housingComplexId });
  }

  return data;
};

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert('units', generateData(), {});

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('units', null, {});

export default { up, down };
