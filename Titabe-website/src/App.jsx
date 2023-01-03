import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx';
import { UserContextProvider } from './components/UserContext.js';

import './App.css'

const App = () => {

  return(
    <div className='bg-dark'>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/register' element={<Register/>} />
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;