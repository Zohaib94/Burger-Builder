import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'}
]

const buildControls = (props) => (
  <div className='BuildControls'>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        type={ctrl.type}
        key={ctrl.type}
        label={ctrl.label}
        ingredientAdded={props.added}
        ingredientRemoved={props.removed}
        isDisabled={props.disabledInformation[ctrl.type]}
      />
    ))}
    <button disabled={props.disableOrder} className='OrderButton'>ORDER NOW</button>
  </div>
);

export default buildControls;
