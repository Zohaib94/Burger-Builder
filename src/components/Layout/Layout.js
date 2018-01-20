import React from 'react';
import AuxiliaryHOC from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

const Layout = (props) => (
  <AuxiliaryHOC>
    <Toolbar/>
    <Sidebar/>
    <main className='main'>{props.children}</main>
  </AuxiliaryHOC>
);

export default Layout;
