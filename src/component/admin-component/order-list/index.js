import React from 'react';
import { connect } from 'react-redux';
import Order from '../order';

const OrderList = props => (
  <ul>
    {props.orders.map(order => (
      <Order
        key={order._id}
        order={order}
      />
    ))}
  </ul>
);

const mapStateToProps = state => ({ orders: state.orders });

export default connect(mapStateToProps)(OrderList);
