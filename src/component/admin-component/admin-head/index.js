import React from 'react';
import { connect } from 'react-redux';
import AdminNav from '../admin-nav';
import './_admin_head.scss';

const AdminHead = props => (
  <div className="admin-head">
    <img src="#" alt="logo" />
    {props.user &&
      <AdminNav
        changeView={props.changeView}
        userLogout={props.userLogout}
      />
    }
  </div>
);

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(AdminHead);
