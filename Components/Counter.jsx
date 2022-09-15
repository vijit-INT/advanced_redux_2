import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store/counter-slice';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter)
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.register.auth);
     if(!auth){
      return <div className={styles.impcdiv}>
        <Link to="/">Please login first!</Link>
      </div>
     }

    const incrementHandler = () => {
       dispatch(counterActions.increment());
    };

    const decrementHandler = () =>{
       dispatch(counterActions.decrement());
    }

    const resetHandler =() =>{
        dispatch(counterActions.reset())
    }
  return (
    <div className={styles.addTodoDiv}>
          <h1>{counter}</h1>
          <button onClick={incrementHandler}>add</button>
          <button onClick={resetHandler}>Reset</button>
          <button onClick={decrementHandler}>delete</button>
          
    </div>
  )
}

export default Counter