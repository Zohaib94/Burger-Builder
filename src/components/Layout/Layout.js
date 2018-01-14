import React from 'react';
import AuxiliaryHOC from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
  <AuxiliaryHOC>
    <div><Toolbar/></div>
    <main className='main'>{props.children}</main>
  </AuxiliaryHOC>
);

export default Layout;
