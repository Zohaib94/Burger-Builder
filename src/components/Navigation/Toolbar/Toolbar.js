import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
  <header className='Toolbar'>
    <div>Menu</div>
    <Logo/>
    <nav>
      <ul>
        <li>testing</li>
      </ul>
    </nav>
  </header>
);

export default toolbar;
