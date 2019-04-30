import 'dotenv/config';
import * as config from '../config/index';
import App from './app';
import BuildingController from './building/building.controller';
import HousingComplexController from './housing-complex/housing-complex.controller';
import PropertyController from './property/property.controller';
import StatusController from './status/status.controller';
import UnitController from './unit/unit.controller';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App(config);

app.initialize([
  new StatusController(),
  new BuildingController(),
  new HousingComplexController(),
  new UnitController(),
  new PropertyController(),
]);

app.listen();
