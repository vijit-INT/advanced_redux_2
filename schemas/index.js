import * as Yup from 'yup';

export const signUpSchemaForRegister = Yup.object({
    name: Yup.string().min(2).max(30).required('Please Enter Name!'),
    mobile: Yup.string().min(10).required('Please Enter mobile number'),
    email: Yup.string().email().required('please Enter Email ID!'),
    password: Yup.string().min(8).matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ).required("Please enter your password")
});

export const signUpSchemaForLogin = Yup.object({
    email: Yup.string().email().required('please Enter Email ID!'),
    password: Yup.string().min(8).matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ).required("Please enter your password")
});