import React from 'react';
import {connect} from 'react-redux';
import './_cart.scss';

class CartModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cart: [{_id: 12, photoURI: '../../../../assets/landwheel4.jpg', name: 'landwheel', price: 400}, {_id: 34, photoURI: '../../../../assets/battery.jpg', name: 'battery', price: 50}],
    };
    this.handleCartItemDelete = this.handleCartItemDelete.bind(this);
  }

  handleCartItemDelete(item){

  }

  render(){
    let total = this.state.cart.reduce((acc, cur) => {
      return acc += cur.price, 0;
    });
    console.log('total: ', total);
    console.log('cart state: ', this.state.cart[0].photoURI);
    return(
      <div className='cart-modal-background' onClick={this.props.onComplete}>
        <div className='cart-modal-content'>
          {this.state.cart.map(item => {
            return <div className='cart-modal-items' key={item._id}>
              <img src={item.photoURI} />
              <h6>{item.name}</h6>
              <h6>${item.price}</h6>
              <button className='close' onClick={this.handleCartItemDelete}>X</button>
            </div>;
          })}
          <div className='cart-modal-footer'>
            <div className='cart-total-container'>
              <div className='cart-total-text'>
                Total
              </div>
              <div className='cart-total-amount'>
                ${total}
              </div>
            </div>
            <button className='cart-checkout'>Checkout</button>
          </div>
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
