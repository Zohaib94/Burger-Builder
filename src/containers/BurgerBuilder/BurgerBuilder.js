import React, { Component } from 'react';
import AuxiliaryHOC from '../../hoc/Aux';

class BurgerBuilder extends Component {
  render() {
    return (
      <AuxiliaryHOC>
        <div>Burger</div>
        <div>Build Controls</div>
      </AuxiliaryHOC>
    );
  }
}

export default BurgerBuilder;
