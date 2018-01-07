import React, { Component } from 'react';
import AuxiliaryHOC from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }
  render() {
    return (
      <AuxiliaryHOC>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </AuxiliaryHOC>
    );
  }
}

export default BurgerBuilder;
