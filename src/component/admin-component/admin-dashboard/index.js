import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../login-form';
import AdminHead from '../admin-head';
import OrderList from '../order-list';
import ItemList from '../item-list';
import * as userActions from '../../../action/user-actions';
import * as itemActions from '../../../action/item-actions';
import * as util from '../../../lib/util.js';

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'orders' };
    this.changeView = this.changeView.bind(this);
  }

  componentWillMount() {
    console.log('^^^^^^', util.cookieFetch);
    this.props.fetchItems();
    const token = util.cookieFetch('Admin-Token');
    token && this.props.restoreLogin(token);
  }

  changeView(view) {
    this.setState({ view });
  }

  render() {
    return (
      <div className="dashboard">
        <AdminHead
          changeView={this.changeView}
          userLogout={this.props.userLogout}
        />
        {this.props.user ? (
          this.state.view === 'orders' ? (
            <OrderList />
          ) : (
            <ItemList />
          )
        ) : (
          <LoginForm
            onComplete={this.props.userLogin}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = dispatch => ({
  restoreLogin: user => dispatch(userActions.userLogin(user)),
  userLogin: user => dispatch(userActions.userLoginRequest(user)),
  userLogout: () => dispatch(userActions.userLogoutRequest()),
  fetchItems: () => dispatch(itemActions.itemsFetchRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminDashboard);
