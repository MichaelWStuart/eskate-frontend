import React from 'react';

const AdminNav = props => (
  <div>
    <button onClick={() => props.changeView('orders')}>Orders</button>
    <button onClick={() => props.changeView('items')}>Items</button>
    <button onClick={props.userLogout}>Logout</button>
  </div>
);

export default AdminNav;
