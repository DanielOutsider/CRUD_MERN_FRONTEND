import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { register } from './../../services/authService.ts';
import { AxiosResponse } from 'axios';

//Login component
const RegisterForm = () => {
    
    // we define the initial values
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirm: ''
    }

    // Yup validator schema
    const registerSchema = Yup.object().shape(
        {
            name: Yup.string()
                    .min(6, 'Username must have 6 letter minimum')
                    .required('Username is required'),
            email: Yup.string()
                    .email('Invalid Email Format')
                    .required('Email is required'),
            password: Yup.string()
                    .min(6, 'Password must have 6 letter minimum')
                    .required('Password is required'),
            confirm: Yup.string()
                    .required('Please retype your password.')
                    .oneOf([Yup.ref('password')], 'Your passwords do not match.')
        }
    );

    return (
        <div>
            <h4>Register as a new user</h4>
            {/* Formik to encapsule form */}
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async(values) => {
                    register(values.name, values.email, values.password).then((response: AxiosResponse) => {

                        if(response.status === 200){
                            if(response.data.response){
                                console.log(response)
                                //sessionStorage.setItem('sessionToken', response?.data?.response)
                            }else{
                                throw new Error('Error in registry')
                            }                            
                        }else{
                            throw new Error('Invalid Credentials')
                        }

                    }).catch((error) => console.error(`[REGISTER ERROR]: Something went wrong: ${error}`))
                }}
            >
                {
                    ({values, touched, errors, isSubmitting, handleChange, handleBlur }) =>
                    (
                        <Form>
                            {/* Name Field */}
                            <label htmlFor='name'>Name</label>
                            <Field id='name' type='text' name='name' placeholder='Your name' />

                            {/* Name Errors */}
                            {
                            errors.name && touched.name && (
                                <ErrorMessage name='name' component='div'></ErrorMessage>
                            )
                            }
                             
                            {/* Email Field */}
                            <label htmlFor='email'>Email</label>
                            <Field id='email' type='email' name='email' placeholder='example@email.com' />

                            {/* Email Errors */}
                            {
                            errors.email && touched.email && (
                                <ErrorMessage name='email' component='div'></ErrorMessage>
                            )
                            }

                            {/* Password Field */}
                            <label htmlFor='password'>Password</label>
                            <Field id='password' type='password' name='password' />

                            {/* Password Errors */}
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage name='password' component='div'></ErrorMessage>
                                )
                            }

                            {/* Password confirm Field */}
                            <label htmlFor='confirm'>Password confirm</label>
                            <Field id='confirm' type='password' name='confirm' />

                            {/* Password confirm Errors */}
                            {
                                errors.confirm && touched.confirm && (
                                    <ErrorMessage name='confirm' component='div'></ErrorMessage>
                                )
                            }

                            {/* SUBMIT FORM */}
                            <button type='submit'>Register</button>

                            {/* Message if the form is submitting */}
                            {
                                isSubmitting ? (<p>Sending data to registry...</p>) : null
                            }

                        </Form>
                    )

                }

            </Formik>
        </div>
    )
}

export default RegisterForm;