// import Logo from '../Components/img/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
   <>
   <div className="header">
    <h2 className='logo1'> <span>Artists</span> Platform</h2>
      {/* <div>
          <img className='logo' src={Logo} alt="logo" />
        </div> */}
      <ul className="nav">
        <li>
          <Link to="/home">Home</Link>
          </li>
        <li>
          <Link to="/profile">Profile</Link>
          </li>
        <li>
          <Link to="/Categories">Categories</Link>
          </li>
        <li>
          <Link to="/about ">About </Link>
          </li>
        <li>
        <Link to="/login" class="navbar-link">Login</Link>
          </li>
      </ul>
      </div>
    </>
  );
}

export default Navbar;
