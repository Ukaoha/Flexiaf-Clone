import React from 'react';
import logo from "./images/logo.jpg"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="nav">
             <ul className="nav-links">
                <div className='nav-logo'>
            <li><img  src={logo} alt="" /> </li>
            </div>
          
            {/* <className="links"> */}
            <li className="toggle-bar"><i className="fas fa-bars" id="btn"></i></li>
  
               <li className="nav-item"><Link to="/">Home</Link></li>
               <li className="nav-item"> <Link to="/about">About</Link></li>
               <li className="nav-item"> <Link to="/learn">Error </Link></li>
               <li className="nav-item"> <Link to="/users">Users </Link></li>
               <li className="nav-item"> <Link  to="/contact"  className="btn-blue">Contact </Link></li>

                
            </ul>

        </nav>
     );
}
 
export default Navbar;
