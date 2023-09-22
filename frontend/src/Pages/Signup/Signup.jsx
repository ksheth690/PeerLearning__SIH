import React from 'react'
import "./Signup.scss"

const Signup = () => {
  const handleSubmit = () => {

  }
  return (
    <div className='signup'>
      {/* serverfv */}
    <div className="content">

        <div className="left">
            <span className='heading'>
                <h1>Let's Set up your Account</h1>
            </span>

            <hr />
            <form className='login-form' onSubmit={handleSubmit}>
                {/* <TextField className="form-input"
                // sx={{height:"6vh"}}
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
                <Button type='submit' variant="contained" className='button'>Login</Button> */}
            </form>
        </div>
        <div className="right"></div>
    </div>
</div>

  )
}

export default Signup