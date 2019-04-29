import * as express from 'express';

import createBuilding from './createBuilding';
import getBuilding from './getBuilding';
import getBuildings from './getBuildings';
import validator from './validator';

const buildings = express.Router();

buildings.route('/')
  .get(getBuildings)
  .post(validator.post, createBuilding);

buildings.route('/:id')
  .get(validator.get, getBuilding);

export default buildings;
