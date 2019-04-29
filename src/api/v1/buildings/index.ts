import { Router } from 'express';

import validator from './validator';
import getBuilding from './getBuilding';
import getBuildings from './getBuildings';
import createBuilding from './createBuilding';

const buildings = new Router();

buildings.route('/')
  .get(getBuildings)
  .post(validator.post, createBuilding);

buildings.route('/:id')
  .get(validator.get, getBuilding);

export default buildings;
