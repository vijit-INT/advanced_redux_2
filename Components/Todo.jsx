import React,{useState} from 'react'
import { todoAction } from '../Store/todo-slice'
import { useDispatch, useSelector } from 'react-redux'
import {v4 as uuid} from 'uuid'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
const Todo = () => {
    const dispatch = useDispatch();
    const [item, setItem] = useState("");
    const todo = useSelector((state) => state.todo.todo)
    const auth = useSelector((state) => state.register.auth);

    if(!auth){
      return <div className={styles.impcdiv}>
           <Link to='/'>Please login first!</Link>
      </div>
    }

    const addItemHandler = () =>{
          dispatch(todoAction.addTodo({
            id: uuid(),
              item
          }))
    }
  return (
    <div>
        <br />
        <input value={item} onChange={(e) => setItem(e.target.value)} placeholder='Enter Todo' />
        <button onClick={addItemHandler}>ADD</button>
         {
            todo.map((item)=>(
              <div key={item.id}>
                   <h1 >{item.task}</h1>
              </div>
               
            ))
         }

    </div>
  )
}

export default Todo