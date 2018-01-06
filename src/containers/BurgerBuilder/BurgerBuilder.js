import React, { Component } from 'react';
import AuxiliaryHOC from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }
  render() {
    return (
      <AuxiliaryHOC>
        <Burger ingredients={this.state.ingredients} />
      </AuxiliaryHOC>
    );
  }
}

export default BurgerBuilder;
