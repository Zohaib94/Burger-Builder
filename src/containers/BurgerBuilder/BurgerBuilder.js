import React, { Component } from 'react';
import AuxiliaryHOC from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
    totalPrice: BASE_PRICE,
    orderDisabled: true,
    displayOrder: false
  }

  toggleOrderDisplay = () => {
    let newState = this.state.displayOrder
    this.setState({displayOrder: !newState})
  }

  updatePurchaseState = (ingredients) => {
    let disableOrder = true;
    Object.keys(ingredients).forEach((ingredient) => {
      if(ingredients[ingredient] > 0) {
        disableOrder = false;
      }
    });
    this.setState({orderDisabled: disableOrder});
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
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    let updatedIngredients = {...this.state.ingredients}
    updatedIngredients[type] = updatedIngredients[type] - 1;
    if(updatedIngredients[type] < 0){
      updatedIngredients[type] = 0;
    }
    let updatedPrice = BASE_PRICE + this.calculateTotalPrice(updatedIngredients);
    this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
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
          disableOrder={this.state.orderDisabled}
          toggleOrder={this.toggleOrderDisplay}
        />
        <Modal show={this.state.displayOrder} toggleOrder={this.toggleOrderDisplay}>
          <OrderSummary ingredients={this.state.ingredients} removeModal={this.toggleOrderDisplay}/>
        </Modal>
      </AuxiliaryHOC>
    );
  }
}

export default BurgerBuilder;
