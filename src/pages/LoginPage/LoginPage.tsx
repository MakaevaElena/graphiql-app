import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../yup/schema';
import { setData } from '../../store/slices/formSlice';
import { Form } from '../../common-types/common-types';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<Form>({
    mode: 'onChange',
    resolver: yupResolver<Form>(schema),
  });

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const { name, email, password, password_repeat } = data;

    if (data)
      dispatch(
        setData({
          name,
          email,
          password,
          password_repeat,
        })
      );

    navigate(`/Welcome`);
  };

  return (
    <>
      <h2 className={styles['tytle']}>Login Page</h2>
      <div className={styles['form__container']}>
        <div className={styles['form']}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['form-row']}>
              <div>
                <label htmlFor="name">name</label>
              </div>
              <div>
                <input type="text" {...register('name')} id="name" />
              </div>
            </div>
            {errors.name && (
              <p className={styles['error-message']} role="alert">
                {'validate for first uppercased letter, length more then 2 and no space'}
              </p>
            )}

            <div className={styles['form-row']}>
              <label htmlFor="email">email</label>
              <input type="text" {...register('email')} id="email" />
            </div>
            {errors.email && (
              <p className={styles['error-message']} role="alert">
                {errors.email?.message}
              </p>
            )}

            <div className={styles['form-row']}>
              <label htmlFor="password">password</label>
              <input type="password" {...register('password')} id="password" />
            </div>
            {errors.password && (
              <p className={styles['error-message']} role="alert">
                {errors.password?.message}
              </p>
            )}

            <div className={styles['form-row']}>
              <label htmlFor="password_repeat">repeat password</label>
              <input type="password" {...register('password_repeat')} id="password_repeat" />
            </div>
            {errors.password_repeat && (
              <p className={styles['error-message']} role="alert">
                {'both passwords should match'}
              </p>
            )}

            <div className={styles['form-row']}>
              <button type="submit" disabled={!isDirty || !isValid}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
