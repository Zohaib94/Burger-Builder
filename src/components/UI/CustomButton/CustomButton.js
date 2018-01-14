import React from 'react';
import classes from './CustomButton.css';

const custombutton = (props) => (
  <button className={['Button', props.buttonStyle].join(' ')} onClick={() => props.clickEvent()}>{props.children}</button>
);

export default custombutton;
