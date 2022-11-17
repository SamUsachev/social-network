import { combineReducers, legacy_createStore as CreateStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let reducers = combineReducers({
  postsPage: profileReducer,
  dialogsPage: dialogsReducer,
});

let store = CreateStore(reducers);

export default store;
