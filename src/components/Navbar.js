import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { AiFillHome } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-center'>
          <Link to='/'>
            <img src={logo} alt='cocktail db' className='logo' />
          </Link>
          <ul className='nav-links'>
            <li>
              <Link to='/' style={{ fontSize: '1.5rem' }}>
                <AiFillHome />
              </Link>
            </li>
            <li>
              <Link to='/about' style={{ fontSize: '1.5rem' }}>
                <BsInfoCircleFill />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
