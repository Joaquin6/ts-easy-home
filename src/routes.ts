import { Router } from 'express';
import status from './status';
import v1 from './api/v1';

const routes = Router();
routes.use('/status', status);
routes.use('/v1', v1);

export default routes;
