import Joi, { any } from "joi";

export const formikValidateUsingJoi = (schema: object) => {
  return (values: object) => {
    const { error } = Joi.object(schema).validate(values, {
      abortEarly: false,
    });

    if (!error) {
      return null;
    }

    const errors: any = {};
    for (const detail of error.details) {
      errors[detail.path[0]] = detail.message;
    }

    return errors;
  };
};

export default formikValidateUsingJoi;
