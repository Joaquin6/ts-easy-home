/* eslint-disable import/prefer-default-export */
import Joi from 'joi';

import addRequestValidator from './requestValidator';

export * from './bunyan';
export * from './addConfigToRequest';

export const requestValidator = addRequestValidator({ Joi });
