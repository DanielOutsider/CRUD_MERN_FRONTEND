import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
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

import { login } from './../../services/authService.ts';
import { AxiosResponse } from 'axios';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid Email Format').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const LoginForm = () => {
    // we define the initial credentials
    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>

                    {/* Formik to encapsule form */}
                    <Formik
                        initialValues={initialCredentials}
                        validationSchema={loginSchema}
                        onSubmit={async(values) => {
                            login(values.email, values.password).then((response: AxiosResponse) => {

                                if(response.status === 200){
                                    if(response.data.token){
                                        sessionStorage.setItem('sessionToken', response?.data?.token)
                                    }else{
                                        throw new Error('Error generating Login Token')
                                    }                            
                                }else{
                                    throw new Error('Invalid Credentials')
                                }

                            }).catch((error) => console.error(`[LOGIN ERROR]: Something went wrong: ${error}`))
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
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                        />
                                        {errors.email && touched.email && <ErrorMessage name="email" component="div" />}
                                        <Field
                                            as={TextField}
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="password"
                                            label="Password"
                                            name="password"
                                            type='password'
                                            autoComplete="password"
                                            autoFocus
                                        />
                                        {errors.password && touched.password && <ErrorMessage name="password" component="div" />}
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign In
                                    </Button>
                                    {isSubmitting ? <p>Checking credentials...</p> : null}
                                    <Grid container>
                                        <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                        </Grid>
                                        <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                        </Grid>
                                    </Grid>
                                    <Copyright sx={{ mt: 5 }} />
                                    </Box>
                                </Form>
                            )
                        }
                    </Formik>
            </Box>
            </Grid>
        </Grid>
        </ThemeProvider>
    );
}

export default LoginForm;