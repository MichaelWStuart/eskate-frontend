import React from 'react';
import {connect} from 'react-redux';
import './_cart.scss';
import * as util from '../../../../lib/util';

class CartModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cartHasItems: false,
    };
    this.handleCartItemDelete = this.handleCartItemDelete.bind(this);
  }

  componentWillReceiveProps(props){
    let cartItems = this.props.cart.length;
    cartItems ? this.setState({cartHasItems: true}) : undefined;
  }

  handleCartItemDelete(item){

  }

  render(){
    let total = this.state.cartHasItems ? this.props.cart.reduce((acc, cur) => {
      return acc += cur.price, 0;
    }) : 'empty';
    
    console.log('total: ', total);
    return(
      <div className='cart-modal-background' onClick={this.props.onComplete}>
        <div className='cart-modal-content'>
          {util.renderIf(this.state.cartHasItems,
            <div>
              {this.props.cart.map(item => {
                return <div className='cart-modal-items' key={item._id}>
                  <img src={item.photoURI} />
                  <h6>{item.name}</h6>
                  <h6>${item.price}</h6>
                  <button className='close' onClick={this.handleCartItemDelete}>X</button>
                </div>;
              })}
            </div>
          )}
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
