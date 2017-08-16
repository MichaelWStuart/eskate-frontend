import React from 'react';
import { connect } from 'react-redux';
import * as storeActions from '../../../action/store-actions';
import * as util from '../../../lib/util';
import './_header.scss';
import CartModal from '../main/cart';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      itemName:'',
      itemCount: 3,
      itemTotal: 100.00,
      showCart: false,
    };
    this.handleCartModal = this.handleCartModal.bind(this);
  }
  componentWillMount() {
    this.props.storeSettingsFetch();
  }

  handleCartModal(){
    this.setState({showCart: true});
  }

  render() {
    let {itemName, itemCount, itemTotal} = this.state;
    return (
      <div className='frontend-header'>
        <img
          className='store-logo'
          src={this.props.header.storeLogoURI}
        />
        <div className='cart-button'>
          <button type='button'
            onClick={this.handleCartModal}>
            <i className="fa fa-shopping-cart"></i> <span id="cart-total">
              {itemCount} item(s) - $ {itemTotal}</span></button>
        </div>
        {util.renderIf(this.state.showCart,
          <CartModal
          />
        )}
        <div className='navigation'>
          <ul className='navigation-menu'>
            <li>
              <a href='#'>
              Boards
              </a>
            </li>
            <li>
              Parts
            </li>
            <li>
              <a href='#'>
              About Us
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  header: state.store,
});

let mapDispatchToProps = (dispatch) => ({
  storeSettingsFetch: () => dispatch(storeActions.storeSettingsFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
