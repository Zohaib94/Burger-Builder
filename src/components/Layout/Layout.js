import React from 'react';
import AuxiliaryHOC from '../../hoc/Aux';

const Layout = (props) => (
  <AuxiliaryHOC>
    <div>Navigational Components will be added here (Toolbar, Sidebar etc.)</div>
    <main>{props.children}</main>
  </AuxiliaryHOC>
);

export default Layout;
