import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './Sidebar.css';

const sidebar = (props) => {
  return(
    <div className='Sidebar'>
      <Logo/>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  );
}

export default sidebar;
