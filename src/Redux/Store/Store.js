import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../Reducers/Index';

const store = createStore(rootReducer);
 
export default store;