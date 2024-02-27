import OrdersReducer from "./reducers/OrdersReducer";
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    orders: OrdersReducer
});

const store  = createStore(rootReducer, composeWithDevTools());

export default store;