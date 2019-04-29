import { Router } from 'express';

import v1 from './api/v1/index';
import status from './status/index';

const routes = Router();

routes.use('/status', status);
routes.use('/v1', v1);

export default routes;
