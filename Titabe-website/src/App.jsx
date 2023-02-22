import { Navigate,Route, Routes} from 'react-router-dom'
import { useContext } from "react";
import UserContext, { UserContextProvider } from './components/UserContext.js';
import { FiltersProvider } from './components/FiltersContext.jsx';
import { CartProvider } from './components/CartContext.jsx';
import axios from 'axios';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx';
import Store from './pages/Store.jsx';
import Detail from './pages/Detail.jsx';
import Create from './pages/Create.jsx';
import Edit from './pages/Edit.jsx'
import Cart from './pages/Cart.jsx';

import './App.css'

const App = () => {
  return(
    <div className='bg-dark'>
      <UserContextProvider>
        <CartProvider>
        <FiltersProvider>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/store' element={<Store/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/cart' element={<Cart/>} />

            {/*Routes for logged out*/}
            <Route path='/login' element={<RequireUser><Login/></RequireUser>} />
            <Route path='/register' element={<RequireUser><Register/></RequireUser>} />

            {/*Routes for admin*/}
            <Route path='/create' element={<RequireAdmin><Create/></RequireAdmin>} />
            <Route path='/edit/:id' element={<RequireAdmin><Edit/></RequireAdmin>} />

          </Routes>
          </FiltersProvider>
          </CartProvider>
      </UserContextProvider>
    </div>
  );
}

const useAuth = () => {
  return useContext(UserContext)
}

const RequireUser = ({children}) => {
  let user = useAuth().currentUser;
  {console.log(user)}
  if(!user.logged) {
    return children
  }
  return <Navigate to='/'/>
}

const RequireAdmin = ({children}) => {
  let user = useAuth().currentUser;
  {console.log(user)}
  if(user.logged && (user.role_id === 1 || user.role_id === 2)) {
    return children
  } 
  return <Navigate to='/login'/>
}

export default App;