import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { RegisterAction } from '../Store/register-slice';
import styles from './Navbar.module.css'
import { signUpSchemaForRegister } from '../schemas';
import { Link } from 'react-router-dom';
import {v4 as uuid} from 'uuid';

const initialValues ={
    name: '',
    mobile: '',
    email: '',
    password: ''
}

const Register = () => {
   
    const dispatch = useDispatch();

    
    const {values, touched, errors, handleChange, handleSubmit} = useFormik({
           initialValues : initialValues,
           validationSchema: signUpSchemaForRegister,

           onSubmit: (values, action) => {
               dispatch(RegisterAction.updateRegister({
                id: uuid(),
                Name: values.name,
                Mobile: values.mobile,
                Email: values.email,
                Password: values.password
               }))
               action.resetForm();
               alert('User successfully register!')
           }

    })

 
  return (
    <div className={styles.Register} id={styles.impcdiv}>
        <form onSubmit={handleSubmit}> 
        <br/>
        <input placeholder='Enter Name'
               autoComplete='off'
               name='name'
               value={values.name}
               onChange={handleChange}
              />
              {errors.name || touched.name ? <p>{errors.name}</p> : null}
       <br/>
        <input placeholder='Enter Mobile'
               value={values.mobile}
               name='mobile'
               autoComplete='off'
               onChange={handleChange}
               />
               {errors.mobile || touched.mobile ? <p>{errors.mobile}</p> : null}
        <br/>
        <input placeholder='Enter Email Address' 
               value={values.email} 
               name='email'
               autoComplete='off'
               onChange={handleChange}
               />
               {errors.email || touched.email ? <p>{errors.email}</p> : null}
        <br/>
        <input placeholder='Enter Password' 
               value={values.password}
               name='password'
               autoComplete='off' 
               onChange={handleChange}
               />
               {errors.password || touched.password ? <p>{errors.password}</p> : null}
        <br/>
        <button type='submit'>Register</button>
        </form>
       
       <br/>
       <br/>
       <p>If your registration completed then you can Login</p>
       <Link to='/'>Login</Link>
    </div>
  )
}

export default Register