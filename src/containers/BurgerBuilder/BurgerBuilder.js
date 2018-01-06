import React, { Component } from 'react';
import AuxiliaryHOC from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  render() {
    return (
      <AuxiliaryHOC>
        <Burger/>
        <div>Build Controls</div>
      </AuxiliaryHOC>
    );
  }
}

export default BurgerBuilder;
