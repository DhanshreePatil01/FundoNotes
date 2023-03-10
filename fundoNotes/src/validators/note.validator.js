import Joi from '@hapi/joi';

export const noteValidator = (req, res, next) => {
    const schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      color: Joi.string().optional()
    });
    
    const { error, value } = schema.validate(req.body);
    if (error) {
      next(error);
    } else {
      req.validatedBody = value;
      next();
    }
  };