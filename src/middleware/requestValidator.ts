export default function addRequestValidator({ Joi }) {
    return (schema: any, key = 'body') => (req: any, res: any, next: any) => {
      const validationResult = Joi.validate(req[key], schema);
      if (validationResult.error) {
        return res.status(400).json({
          code: 400,
          message: validationResult.error.message,
        });
      }
      req[key] = validationResult.value;
      return next();
    };
  }
