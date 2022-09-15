import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const UserList = () => {
    const userList = useSelector((state) => state.register.authRegister);
    const auth = useSelector((state) => state.register.auth);
    
    if(!auth){
      return <div className={styles.impcdiv}>
        <Link to='/'>Please login frist!</Link>
      </div>
    }
  
  return (
    <div className={styles.listMainDiv}>
        {
            userList.map((item)=>(
                <div className={styles.listDiv} key={item.id}>
                <h1 id={styles.h1}>Name- &nbsp; {item.Name}</h1>
                <h1 id={styles.h1}>Email- &nbsp; {item.Email}</h1>
                <h1 id={styles.h1}>Mobile No- &nbsp; {item.Mobile}</h1>
                <h1 id={styles.h1}>Password- &nbsp; {item.Password}</h1>
                <button>Delete</button>
            </div>
            ))
        }
    </div>
  )
}

export default UserList;