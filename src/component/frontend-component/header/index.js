import React from 'react';
import { connect } from 'react-redux';
import * as storeActions from '../../../action/store-actions';
import './_header.scss';
class Header extends React.Component {
  componentWillMount() {
    this.props.storeSettingsFetch();
  }
  render() {
    return (
      <div className='frontend-header'>
        <img
          className='store-logo'
          src={this.props.header.storeLogoURI}
        />

        <div className='cart-button'>
          <button type="button"><i className="fa fa-shopping-cart"></i> <span id="cart-total">0 item(s) - $0.00</span></button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  header: state.store,
})

let mapDispatchToProps = (dispatch) => ({
  storeSettingsFetch: () => dispatch(storeActions.storeSettingsFetchRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
