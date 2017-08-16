import React from 'react';
import {connect} from 'react-redux';
import './_cart.scss';

class CartModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cart: [{_id: 12, photoURI: '../../../../assets/landwheel4.jpg', name: 'landwheel', price: 400}, {_id: 34, photoURI: '../../../../assets/battery.jpg', name: 'battery', price: 50}],
    };
    this.handleCart = this.handleCart.bind(this);
  }

  handleCart(){

  }

  render(){
    let total = this.state.cart.reduce((acc, cur) => {
      return acc.price + cur.price;
    });
    console.log('total: ', total);
    console.log('cart state: ', this.state.cart[0].photoURI);
    return(
      <div className='cart-modal-container'>
        <div className='cart-modal-content'>
          {this.state.cart.map(item => {
            return <div className='cart-modal-items' key={item._id}>
              <img src={item.photoURI} />
              <h6>{item.name}</h6>
              <h6>{item.price}</h6>
              <button className='close' onClick={this.props.onComplete}>X</button>
            </div>;
          })}
          <div className='cart-total'>
            Total
            <span className='cart-amount'>${total}</span>
          </div>
          <button className='cart-checkout'>Checkout</button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  cart: state.cart,
});

let mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
