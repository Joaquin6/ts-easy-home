import { Router } from 'express';

import getStatus from './getStatus';
import headStatus from './headStatus';

const status = Router();

status.get('/', getStatus);
status.head('/', headStatus);

export default status;
