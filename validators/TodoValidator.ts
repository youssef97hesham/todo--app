import { check } from 'express-validator';

export const todoCreateValidator = () => {
  return [
    check('title').exists().withMessage('Title is required'),
    check('description').exists().withMessage('Description is required'),
  ];
};
export const todoDeleteValidator = () => {
  return [check('id').exists().withMessage('ID is required')];
};
export const todoEditValidator = () => {
  return [
    check('title').exists().withMessage('Title is required'),
    check('description').exists().withMessage('Description is required'),
    check('id').exists().withMessage('ID is required'),
  ];
};
