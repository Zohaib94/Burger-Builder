import React from 'react';
import classes from './Backdrop.css'

const backdrop = (props) => (
  props.show_backdrop ? <div className='Backdrop' onClick={() => props.toggleDisplay()}></div> : null
)

export default backdrop;
