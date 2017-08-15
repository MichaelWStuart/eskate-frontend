import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../login-form';
import * as userActions from '../../action/user-actions';

const Dashboard = props => (
  <div className="dashboard">
    <h2> Login Page </h2>
    <LoginForm
      onComplete={props.userLogin}
    />
  </div>
);

const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = dispatch => ({
  userLogin: user => dispatch(userActions.userLoginRequest(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
