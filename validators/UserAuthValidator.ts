import { check } from 'express-validator';

export const loginValidators = () => {
  return [
    check('email')
      .exists()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Email is not valid'),
    check('password')
      .exists()
      .withMessage('Password is required')
      .isLength({ min: 8 })
      .withMessage("Password can't be less than 8 Characters"),
  ];
};
export const registerValidators = () => {
  return [
    check('email')
      .exists()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Email is not valid'),
    check('password')
      .exists()
      .withMessage('Password is required')
      .isLength({ min: 8 })
      .withMessage("Password can't be less than 8 Characters"),
    check('name').exists().withMessage('Name is required'),
  ];
};
