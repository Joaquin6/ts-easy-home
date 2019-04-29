/* eslint-disable import/prefer-default-export */
import Joi from 'joi';

import addRequestValidator from './requestValidator';

export { default as bunyan } from './bunyan';
export { default as addConfigToRequest } from './addConfigToRequest';

export const requestValidator = addRequestValidator({ Joi });
