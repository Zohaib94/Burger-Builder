import React, { Component } from 'react';

import AuxiliaryHOC from '../../hoc/Aux';
import classes from './Layout.css';

class Layout extends Component {
    render () {
        return (
            <AuxiliaryHOC>
                <main className='Content'>
                    {this.props.children}
                </main>
            </AuxiliaryHOC>
        )
    }
}

export default Layout;
