import BaseDto from "../../../common/dto/base.dto.js";
import Joi from "joi";

class RegisterDto extends BaseDto {
  static schema = Joi.object({
    user: Joi.string().lowercase().min(2).max(50).required(),
    email: Joi.string().lowercase().required().email(),
    password: Joi.string()
      .min(5)
      .required()
      .max(12)
      .message("Password must contain at least 5 character"),
    role: Joi.string().valid("customer", "seller").default("customer"),
  });
}

export default RegisterDto;
