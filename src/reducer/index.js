import { combineReducers } from 'redux';
import user from './user';
import items from './item-reducer';
import store from './store';

export default combineReducers({ user, store, items });
