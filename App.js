import './App.css';
import Counter from './Components/Counter';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Todo from './Components/Todo';
import Register from './Components/register';
import UserList from './Components/UserList';
import Login from './Components/Login';
import Data from './Components/Data';

function App() {
 

  return (
    <div className="App">
      <div className='Jpp'>
      <Navbar />
      <Routes>
        <Route path='/counter' element={<Counter />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/userList' element={<UserList />} />
        <Route path='/data' element={<Data />} />
      </Routes>
     
      </div>
     
    </div>
  );
}

export default App;
