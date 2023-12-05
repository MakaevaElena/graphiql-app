import * as yup from 'yup';

export const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .matches(/^[A-ZА-Я][a-zа-я]*$/)
      .required('required'),
    email: yup
      .string()
      .email('email format need to be xxx@xx.xx')
      .matches(/[a-z0-9]+[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/)
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
          if (password)
            return /(?=(.*[0-9]))(?=.*[@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/gm.test(
              password
            );
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
