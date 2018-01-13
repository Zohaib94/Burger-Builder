import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop'
import AuxiliaryHOC from '../../../hoc/Aux'

const modal = (props) => (
  <AuxiliaryHOC>
    <Backdrop show_backdrop={props.show} toggleDisplay={props.toggleOrder}/>
    <div className='Modal'
      style={{
        transform: props.show ? 'translateY(0)' : 'translate(-100vh)',
        opacity: props.show ? '1' : '0'}}
    >
      {props.children}
    </div>
  </AuxiliaryHOC>
);

export default modal;
