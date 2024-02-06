import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';

//import { login } from './../../services/authService.ts';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';

const userSchema = Yup.object().shape(
    {
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid Email Format').required('Email is required'),
        role: Yup.string().required('Role is required')
    }
)

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const UserCrudForm = (props) => {

    // Puedes acceder a las propiedades pasadas por el componente padre a través de props
    // Por ejemplo, aquí estamos accediendo a la propiedad "name" y "age"
    const { state } = props;

    const roles = [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
        { value: 'guest', label: 'Guest' },
    ];

    const [selectedRole, setSelectedRole] = useState('');

    // we define the initial credentials
    const initialCredentials = {
        name: '',
        email: ''
    }

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    return (

            <Grid item xs={12} sm={8} md={5}> 
            <Box
                sx={{

                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                }}
            >

                    {/* Formik to encapsule form */}
                    <Formik
                        initialValues={initialCredentials}
                        validationSchema={userSchema}
                        onSubmit={async(values) => {
                            /*login(values.email, values.password).then((response: AxiosResponse) => {

                                if(response.status === 200){
                                    if(response.data.token){
                                        sessionStorage.setItem('sessionToken', response?.data?.token)
                                        //enqueueSnackbar('Login successful!', { variant: 'success' });
                                        enqueueSnackbar('Login successful!', {
                                            variant: 'success',
                                            anchorOrigin: {
                                              vertical: 'top',
                                              horizontal: 'right',
                                            },
                                        });

                                        navigate('/dashboard');

                                    }else{
                                        throw new Error('Error generating Login Token')
                                    }                            
                                }else{
                                    throw new Error('Invalid Credentials')
                                }

                            }).catch((error) => {
                                enqueueSnackbar('Something went wrong', {
                                    variant: 'error',
                                    anchorOrigin: {
                                      vertical: 'top',
                                      horizontal: 'right',
                                    },
                                });
                                //enqueueSnackbar('This is a success message!', {variant: 'error'});                                               
                                console.error(`[LOGIN ERROR]: Something went wrong: ${error}`)
                            })*/
                        }}
                    >
                        {
                            ({values, touched, errors, isSubmitting, handleChange, handleBlur }) =>
                            (
                                <Form>
                                    <Box sx={{ mt: 1 }}>

                                        <Field
                                            as={TextField}
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            name="name"
                                            autoComplete="name"
                                            autoFocus
                                        />

                                        <Field
                                            as={TextField}
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                        />

                                        <Select
                                            sx={{ mt: 1 }}
                                            fullWidth                      
                                            id="role"
                                            name="role"
                                            label="Role"
                                            value={selectedRole}
                                            onChange={(e) => setSelectedRole(e.target.value)}
                                        >
                                        {roles.map((role) => (
                                            <MenuItem key={role.value} value={role.value}>
                                            {role.label}
                                            </MenuItem>
                                        ))}
                                        </Select>

                                        <Grid item xs={12} container spacing={1} sx={{ mt: 3 }}>
                                            <Grid item xs={6}>
                                                <Button
                                                type="button"
                                                fullWidth
                                                variant="outlined"
                                                onClick={props?.onCloseDialog}
                                                >
                                                Close
                                                </Button>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                disabled={isSubmitting}
                                                >
                                                {state}
                                                </Button>
                                            </Grid>   
                                        </Grid>
                                    {isSubmitting ? <p>Checking credentials...</p> : null}                                    
                                    </Box>
                                </Form>
                            )
                        }
                    </Formik>


            </Box>
            </Grid>

    );
}

export default UserCrudForm;