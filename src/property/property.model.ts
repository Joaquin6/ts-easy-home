import { BuildingProperty, CitiesGroup, CitiesInterface, CityProperties } from './property.interface';

function groupByCity(buildings: BuildingProperty[], housingComplex: BuildingProperty[]): CitiesGroup[] {
  const cities: CitiesInterface = {};

  buildings.forEach(({ city, name }: BuildingProperty) => {
    if (!cities[city]) {
      const properties: CityProperties = {
        building: [],
        'housing-complex': [],
      };

      cities[city] = { properties };
    }

    cities[city].properties.building.push({ name });
  });

  housingComplex.forEach(({ city, name }: BuildingProperty) => {
    if (!cities[city]) {
      cities[city] = {
        properties: {
          building: [],
          'housing-complex': [],
        },
      };
    }

    cities[city].properties['housing-complex'].push({ name });
  });

  return Object.keys(cities).map(city => ({
    city,
    properties: cities[city].properties,
  }));
}

const propertyModel = {
  groupByCity,
};

export default propertyModel;
