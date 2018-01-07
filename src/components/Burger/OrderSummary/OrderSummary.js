import React from 'react';
import AuxiliaryHOC from '../../../hoc/Aux';

const orderSummary = (props) => {
  let orderDetails = [];
  Object.keys(props.ingredients).forEach((ingredient) => {
    orderDetails.push(<li key={ingredient}>
      <span style={{textTransform: 'capitalize'}}>{ingredient}: {props.ingredients[ingredient]}</span>
    </li>)
  });
  return (
    <AuxiliaryHOC>
      <h3>ORDER SUMMARY:</h3>
      <p>Following are the summary of your ordered burger</p>
      <ul>{orderDetails}</ul>
      <p>Continue to Checkout?</p>
    </AuxiliaryHOC>
  );
}

export default orderSummary;
