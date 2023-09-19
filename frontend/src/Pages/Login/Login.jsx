import React from 'react'
import './Login.scss'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { loginFormScheama } from '../../Schema';

const initialValues = {
    email: "",
    password: ""
}

const Login = () => {

    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues,
        validationSchema: loginFormScheama,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }
    })

    return (
        <div className='login'>
            <div className="content">

                <div className="left">
                    <span className='heading'>
                        <h1>Welcome back</h1>
                        <h1>Login to Your Account</h1>
                    </span>
                    <p>Explore, Collaborate and Learn with the our</p><p>Platform.Explore, Collaborate and </p>
                    <hr />
                    <form className='login-form' onSubmit={handleSubmit}>
                        <TextField className="form-input"
                            label="Email"
                            variant="outlined"
                            type='email'
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!errors.email && touched.email}
                        />
                        {errors.email && touched.email ? (<span className='alert'>{errors.email}</span>) : null}
                        <TextField className="form-input"
                            label="Password"
                            type='password'
                            variant="outlined"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!errors.password && touched.password}
                        />
                        {errors.password && touched.password ? (<span className='alert'>{errors.password}</span>) : null}
                        <span className='link-span'>
                            <Link to={"/forgetpassword"}>Forget Password?</Link>
                        </span>
                        <Button type='submit' variant="contained" className='button'>Login</Button>
                    </form>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default Login