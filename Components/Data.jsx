import React,{useEffect} from 'react'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { RegisterAction } from '../Store/register-slice'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Data = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.register.fetchedData);
    const auth = useSelector((state) => state.register.auth);
  
   
   useEffect(() => {
       axios.get('http://localhost:3000/profile')
       .then((res) =>
        dispatch(RegisterAction.fetchedUpdate(res.data))
        )}, [])
   
    
        if(!auth){
            return <div className={styles.impcdiv}>
               <Link to='/'>Please Login frist!</Link>
            </div>
           }

  return (
    <div className={styles.impDiv}>
       {
        data.map((item) => (
            <div >
               
                 <img id={styles.impimg} src={item.img}/>
                 <h1 id={styles.impH1}>Id:{item.id}</h1>
                 <h1 id={styles.impH1}>First Name:{item.first_name}</h1>
                 <h1 id={styles.impH1}>Last Name:{item.last_name}</h1>
                 <h1 id={styles.impH1}>Email:{item.email}</h1>
                 <h1 id={styles.impH1}>Gender:{item.gender}</h1>


            </div>
        ))
       }
        
    </div>
  )
}

export default Data