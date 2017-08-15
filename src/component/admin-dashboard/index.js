import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../login-form';
import * as userActions from '../../action/user-actions';
import { cookieFetch } from '../../lib/util';

class AdminDashboard extends React.Component {
  componentWillMount() {
    const token = cookieFetch('Admin-Token');
    token && this.props.restoreLogin(token);
  }

  render() {
    return (
      <div className="dashboard">
        <h2> Login Page </h2>
        {this.props.user ? (
          <button onClick={this.props.userLogout}>Logout</button>
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminDashboard);
