import React from 'react';
import AuxiliaryHOC from '../../../hoc/Aux';
import CustomButton from '../../UI/CustomButton/CustomButton'

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
      <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <CustomButton buttonStyle={'Danger'} clickEvent={props.removeModal}>CANCEL</CustomButton>
      <CustomButton buttonStyle={'Success'} clickEvent={props.removeModal}>CONTINUE</CustomButton>
    </AuxiliaryHOC>
  );
}

export default orderSummary;
