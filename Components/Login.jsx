import React from 'react'
import { useFormik } from 'formik'
import { signUpSchemaForLogin } from '../schemas'
import { RegisterAction } from '../Store/register-slice';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'


const initialValues ={
    email : '',
    password : ''
}
const Login = () => {
   const dispatch = useDispatch();
   const userList = useSelector((state) => state.register.authRegister)
   
   const {values, touched, errors, handleChange, handleSubmit } = useFormik({
       initialValues: initialValues,
       validationSchema: signUpSchemaForLogin,

       onSubmit: (values, action) => {
            
        userList.filter((item)=>{
            if(item.Email === values.email && item.Password === values.password){
              dispatch(RegisterAction.updateAuth());
              alert("!You logged in");
          }
          }); 
            action.resetForm();
       } 
    })
  return (
    <div className={styles.impcdiv}>
        <form onSubmit={handleSubmit}>
          <input
           name='email'
           value={values.email}
           onChange={handleChange}
           placeholder='Enter Email Address'
           autoComplete='off'
          />
          {errors.email || touched.email ? <p>{errors.email}</p> : null}
          <br/>
          <input 
           placeholder='Enter password'
           name='password'
           value={values.password}
           autoComplete='off'
           onChange={handleChange}
          />
          {errors.password || touched.password ? <p>{errors.password}</p> : null}
          <br />
          <button type='submit' >Login</button>
        </form>
        <br />
       <div>
       <p>If you don't signUP yet please signUP first!</p>
        <Link to='/register'>signUP</Link>
       </div>

    </div>
  )
}

export default Login