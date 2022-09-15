import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div  className={styles.nav}>
          <img id={styles.img} src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='img1'/>
          <div className={styles.Navsubdiv}>
          <Link  className={styles.comp1a} to='/' >Login</Link>
          <Link className={styles.comp1} to='/register'>Register</Link>
          <Link className={styles.comp1} to='/counter'>Counter</Link>
          <Link className={styles.comp1} to='/todo'>Todo</Link>
          <Link className={styles.comp1} to='/data'>ImportedData</Link>
          <Link className={styles.comp1} to='/userList'>UserList</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar