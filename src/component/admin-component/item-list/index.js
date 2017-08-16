import React from 'react';
import { connect } from 'react-redux';
import Item from '../item';
import * as itemActions from '../../../action/item-actions';

const ItemList = props => (
  <div>
    <h2>Item List</h2>
    <ul>
      {props.items.map(item => (
        <Item
          key={item._id}
          item={item}
        />
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({ items: state.items });

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(itemActions.itemCreateRequest(item)),
  updateItem: item => dispatch(itemActions.itemUpdateRequest(item)),
  destroyItem: item => dispatch(itemActions.itemDestroyRequest(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
