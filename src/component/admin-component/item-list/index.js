import React from 'react';
import { connect } from 'react-redux';
import Item from '../item';

const ItemList = props => (
  <ul>
    {props.items.map(item => (
      <Item
        key={item._id}
        item={item}
      />
    ))}
  </ul>
);

const mapStateToProps = state => ({ items: state.items });

export default connect(mapStateToProps)(ItemList);
