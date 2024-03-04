import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

import css from '../LoginForm/LoginForm.module.css'
export const LoginForm = () => {
     const emailId = useId();
    const passwordId = useId();
    const dispatch = useDispatch();



    const userSchema = Yup.object().shape(
        {
            email: Yup.string()
                .min(10, 'E-mail повинен містити не менше 10 символів!')
                .max(50, 'E-mail повинен містити не більше 50 символів!')
                .required('Рядок є обовʼязковим до заповнення!'),
            password: Yup.string()
                .min(3, 'Пароль повинен містити не менше 3 символів!')
                .max(50, 'Пароль повинен містити не більше 50 символів!')
                .required('Рядок є обовʼязковим до заповнення!'),
        }
    )
    return (
        <>
            <Formik initialValues={{
                    email: '',
                    password: ''
            }}
                validationSchema={userSchema}
               onSubmit={(values, actions) => {
                dispatch(logIn({
                    email: values.email,
                    password: values.password,
                }))
                    .unwrap()
                    .then(() => { console.log('Вход выполнен успешно'); })
                    .catch(() => { console.log('Ошибка входа'); });
                actions.resetForm();
            }}
            >
                <Form className={css.containerFormLogin}>
                    <div className={css.elemFormLogin}>
                        <label htmlFor={emailId}>Email</label>
                        <Field type='email' name="email" id={emailId} className={css.fildFormLogin}></Field>
                        <ErrorMessage name="email" component="span" className={css.errorLogin}></ErrorMessage>
                    </div>
                     <div className={css.elemFormLogin}>
                        <label htmlFor={passwordId}>Password</label>
                        <Field type='password' name="password" id={passwordId} className={css.fildFormLogin}></Field>
                        <ErrorMessage name="password" component="span" className={css.errorLogin}></ErrorMessage>
                    </div>
                    <button type="submit">Log In</button>
                </Form>
            </Formik>
        </>
        
    )
}