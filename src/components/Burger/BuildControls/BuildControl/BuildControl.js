import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => (
  <div className='BuildControl'>
    <div className='Label'>{props.label}</div>
    <button className='Less' onClick={() => props.ingredientRemoved(props.type)}>Less</button>
    <button className='More' onClick={() => props.ingredientAdded(props.type)}>More</button>
  </div>
);

export default buildControl;
