import { Router } from 'express';
import buildings from './buildings';

const v1 = new Router();

v1.use('/buildings', buildings);

export default v1;
