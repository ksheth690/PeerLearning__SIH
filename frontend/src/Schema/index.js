import * as Yup from 'yup';

export const loginFormScheama = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email address is required"),
    password: Yup.string().required("Password is required")
})
