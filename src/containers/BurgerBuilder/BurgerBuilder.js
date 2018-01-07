import React, { Component } from 'react';
import AuxiliaryHOC from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 2,
  cheese: 1,
  meat: 1.5
}
const BASE_PRICE = 5;

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: BASE_PRICE
  }

  calculateTotalPrice = (ingredients) => {
    let price = 0;
    Object.keys(ingredients).forEach((ingredient) => {
      price = price + (INGREDIENT_PRICES[ingredient] * ingredients[ingredient]);
    })
    return price;
  }

  addIngredientHandler = (type) => {
    let updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedIngredients[type] + 1;
    let updatedPrice = BASE_PRICE + this.calculateTotalPrice(updatedIngredients);
    this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
  }

  removeIngredientHandler = (type) => {
    let updatedIngredients = {...this.state.ingredients}
    updatedIngredients[type] = updatedIngredients[type] - 1;
    if(updatedIngredients[type] < 0){
      updatedIngredients[type] = 0;
    }
    let updatedPrice = BASE_PRICE + this.calculateTotalPrice(updatedIngredients);
    this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
  }

  render() {
    const disabledInfo = {...this.state.ingredients};

    Object.keys(disabledInfo).forEach((ingredient) => {
      disabledInfo[ingredient] = (disabledInfo[ingredient] <= 0);
    })

    return (
      <AuxiliaryHOC>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          added={this.addIngredientHandler}
          removed={this.removeIngredientHandler}
          disabledInformation={disabledInfo}
          price={this.state.totalPrice}
        />
      </AuxiliaryHOC>
    );
  }
}

export default BurgerBuilder;
