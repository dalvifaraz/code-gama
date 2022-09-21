import React from 'react';
import './Header.css';
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
export default function Header(props) {
  return (
    <div className='nav'>
      <ul className='menu'>
        <Link to='/'>
          <li className='logo-row'>
            <img className='logo-img' src={logo} alt='logo' />
            <h2 className='p-lg-3 p-md-0 ps-md-2 ps-sm-2 pt-md-3 pt-sm-3 code'>
              Code <span className='gama'>Gama</span>
            </h2>
          </li>
        </Link>
        <Link to='/products'>
          <li>
            <a href='#'>PRODUCTS</a>
          </li>
        </Link>
        <Link to='/'>
          <li>
            <a href='#about dropdown'>CATEGORY</a>
            {/* <div className='dropdown-content'>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div> */}
          </li>
        </Link>
        <li>
          <a href='#'>USER</a>
        </li>
        <li>
          <a href='#'>CART</a>
        </li>
      </ul>
    </div>
  );
}
