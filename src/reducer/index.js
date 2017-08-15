import { combineReducers } from 'redux';
import user from './user';
import items from './item-reducer';

export default combineReducers({
  user,
  items,
});
