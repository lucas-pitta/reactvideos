import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
import Login from '../Login';

function Menu() {
  return (
    <nav className='Menu'>
      <Link to='/'>
        <img className='Logo' src={Logo} alt='PittaFlix' />
      </Link>
      <Login />
    </nav>
  );
}

export default Menu;
