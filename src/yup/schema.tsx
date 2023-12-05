import * as yup from 'yup';

const CHECK_NAME = /^[A-ZА-Я][a-zа-я]*$/;
const CHECK_EMAIL = /[a-z0-9]+[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/;
const CHECK_PASSWORD =
  /(?=(.*[0-9]))(?=.*[@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

export const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .matches(CHECK_NAME)
      .test('name length', 'name is too short', (name) => {
        if (name) return name?.length > 2;
      })
      .required('required'),
    email: yup
      .string()
      .email('email format need to be xxx@xx.xx')
      .matches(CHECK_EMAIL)
      .required('email required'),
    password: yup
      .string()
      .test('is strong password', 'password in not strong', (password) => {
        if (password) return password?.length > 8;
      })
      .test(
        'password format',
        'should match, display the password strength: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character',
        (password) => {
          if (password) return CHECK_PASSWORD.test(password);
        }
      )
      .defined()
      .required('password required'),
    password_repeat: yup
      .string()
      .oneOf([yup.ref('password')], 'passwords not match')
      .required('password_repeat required'),
  })
  .required();
