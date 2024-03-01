import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useId } from "react";
import css from '../pages/Login.module.css'

export default function Login() {
    const emailId = useId();
    const passwordId = useId();

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
                    actions.resetForm()
                    onAddUserLogin({id: Date.now(), ...values})
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
