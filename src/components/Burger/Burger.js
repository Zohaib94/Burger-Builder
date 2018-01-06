import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    var ingredientCount = props.ingredients[igKey];
    var ingredientsList = [];

    for(var i = 0; i < ingredientCount; i++){
      ingredientsList.push(<BurgerIngredient key={igKey + i} type={igKey} />);
    }

    return ingredientsList;
  });
  return (
    <div className='Burger'>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger;
