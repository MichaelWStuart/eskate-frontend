import React from 'react';
import './_cart.scss';

class CartModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: '',
    };
    this.handleCart = this.handleCart.bind(this);
  }

  handleCart(){

  }

  render(){
    return(
      <div className='cart-background' items={this.state.items}>
        <h3>CART</h3>
      </div>
    );
  }
}

export default CartModal;
