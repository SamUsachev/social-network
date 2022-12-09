import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as CreateStore,
} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  postsPage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = CreateStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
