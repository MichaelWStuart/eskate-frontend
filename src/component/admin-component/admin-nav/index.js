import React from 'react';
import './_admin_nav.scss';

const AdminNav = props => (
  <div className="admin-nav">
    <button className="admin-nav-button" onClick={props.userLogout}>Logout</button>
    <button className="admin-nav-button" onClick={() => props.changeView('orders')}>Orders</button>
    <button className="admin-nav-button" onClick={() => props.changeView('items')}>Items</button>
  </div>
);

export default AdminNav;
