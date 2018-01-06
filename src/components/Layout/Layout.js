import React from 'react';
import AuxiliaryHOC from '../../hoc/Aux';
import classes from './Layout.css';

const Layout = (props) => (
  <AuxiliaryHOC>
    <div>Navigational Components will be added here (Toolbar, Sidebar etc.)</div>
    <main className='main'>{props.children}</main>
  </AuxiliaryHOC>
);

export default Layout;
