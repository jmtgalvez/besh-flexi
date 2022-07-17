import React from 'react';
import {Link} from 'react-router-dom';


export default function Header() {
  return (
    <header className='header__navbar opensans'>
      <div id='frontpage__logo'>
        <Link to='/' className='opensans'>Logo</Link> 
      </div>
      <nav>
        <ul>
          <li><Link className='opensans' to="#">About</Link></li>
          <li>
            <Link id='frontpage__header__btn' to="/Login">
             Log In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
