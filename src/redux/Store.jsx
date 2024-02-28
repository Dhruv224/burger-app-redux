import OrdersReducer from "./reducers/OrdersReducer";
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import ThemeReducers from "./reducers/ThemeReducers";

const rootReducer = combineReducers({
    orders: OrdersReducer,
    themeMode: ThemeReducers
});

const store  = createStore(rootReducer, composeWithDevTools());

export default store;