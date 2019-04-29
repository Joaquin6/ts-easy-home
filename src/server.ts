import 'dotenv/config';
import App from './app';
import BuildingController from './building/building.controller';
import StatusController from './status/status.controller';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([
  new StatusController(),
  new BuildingController(),
]);

app.listen();
