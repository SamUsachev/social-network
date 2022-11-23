import { combineReducers, legacy_createStore as CreateStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
  postsPage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
});

let store = CreateStore(reducers);

export default store;
