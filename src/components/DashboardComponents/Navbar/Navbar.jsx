import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser } from '../../../redux/actionCreators/authActionCreator';

const Navbar = () => {

    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
  
    return (
     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
       
       <Link to="/dashboard" className="navbar-brand  ms-5 p-3">File Management System</Link>
       
       <ul className="navbar-nav ms-auto me-5">
  
        {
          <>
            <li className="nav-item mx-2">
              <p className='my-0 mt-2 mx-2'>
                <span className="text-dark">Welcome,</span>  
                <span className='fw-bold'>{user.displayName}</span>
              </p>
            </li>
  
            <li className="nav-item mx-2">
            <Link to="/" className="btn btn-primary">
              Home
            </Link>
            </li>
  
          <li className="nav-item">
            <button className="btn btn-success" onClick={() => dispatch(signOutUser())}>
              logout
            </button>
          </li>
          </>
        }
  
       </ul>
  
     </nav>
    
    )
  };
  
  export default Navbar;