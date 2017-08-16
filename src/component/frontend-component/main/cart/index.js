import React from 'react';
import './_cart.scss';

class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: '',
      showCart: false,
    };
  }

  render(){
    return(
      <div className='cart-background'>
      CART
      </div>
    );
  }
}

export default Cart;
