import Joi from 'joi';
import { requestValidator } from '../../../middleware';

export const schemas = {
  create: Joi.object().keys({
    type: Joi.string().required(),
  }).required(),
  get: Joi.object().keys({
    id: Joi.string().uuid().required(),
  }).required(),
};

export default {
  post: requestValidator(schemas.create),
  get: requestValidator(schemas.get, 'params'),
};
