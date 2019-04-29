import 'dotenv/config';
import App from './app';
import StatusController from './status/status.controller';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([
  new StatusController(),
]);

app.listen();
