import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import {Login,Register,HomePage,DashboardPage} from "./pages"
import { checkIsLoggedIn } from './redux/actionCreators/authActionCreator';


const App = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(checkIsLoggedIn());
  },[])

  return (
   <div className='App'>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/dashboard' element={<DashboardPage />}/>
    </Routes>
   </div>
  )
}

export default App;
