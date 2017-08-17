import React from 'react';
import { connect } from 'react-redux';
import AdminNav from '../admin-nav';
import './_admin_head.scss';

const AdminHead = props => (
  <div className="admin-head">
    <img className="store-logo" src={props.header.storeLogoURI} alt="store logo" />
    <div className="admin-title">
      <h1>Admin Page</h1>
    </div>
    {props.user &&
      <AdminNav
        changeView={props.changeView}
        userLogout={props.userLogout}
      />
    }
  </div>
);

const mapStateToProps = state => ({ user: state.user, header: state.store });

export default connect(mapStateToProps)(AdminHead);
