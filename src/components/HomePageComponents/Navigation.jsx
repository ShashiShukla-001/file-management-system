import React from 'react'
import { Link } from 'react-router-dom';

 const NavigationComponent = () => {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     
     <Link to="#" className="navbar-brand  ms-5">React Firebase File Management System</Link>
     
     <ul className="navbar-nav ms-auto me-5">

        <li className="nav-item mx-2">
          <Link to="/login" className="btn btn-sm btn-primary">
            Login
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="btn btn-success btn-sm">
            Register
          </Link>
        </li>

     </ul>

   </nav>
  
  )
};

export default NavigationComponent;