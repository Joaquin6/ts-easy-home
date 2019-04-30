import { QueryInterface } from 'sequelize';

const types = ['building', 'housing-complex'];
const housingNames = ['Sunny Suites', 'Stormy Suites'];
const buildingNames = ['AT&T tower', 'Floyd tower'];

const getType = () => types[Math.floor(Math.random() * types.length)];
const getHousingNames = () => housingNames[Math.floor(Math.random() * housingNames.length)];
const getBuildingNames = () => buildingNames[Math.floor(Math.random() * buildingNames.length)];

const baseData = {
  createdAt: new Date(),
  updatedAt: new Date(),
};

const generateData = (max = 50) => {
  const data = [];

  for (const index = 0; index < max; index + 1) {
    const type = getType();
    const name = type === 'housing-complex' ? getHousingNames() : getBuildingNames();

    data.push({ ...baseData, name, type });
  }

  return data;
};

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert('units', generateData(), {});

export const down = (queryInterface: QueryInterface) =>
  queryInterface.bulkDelete('units', null, {});

export default { up, down };
