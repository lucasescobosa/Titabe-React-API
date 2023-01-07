import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx';
import Store from './pages/Store.jsx';
import { UserContextProvider } from './components/UserContext.js';

import './App.css'

const App = () => {

  return(
    <div className='bg-dark'>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/store' element={<Store/>} />
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;