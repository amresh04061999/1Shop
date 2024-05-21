import * as Yup from 'yup';
import { emailRegex } from '../constants/login.constant';

/**
 * Validation for login
 */
export const validationLogin = Yup.object({
  emailId: Yup.string()
    .trim()
    .required('Email Address is required.')
    .matches(emailRegex, 'Please enter a valid email address.'),
  password: Yup.string().trim().required('Password is required.')
});
