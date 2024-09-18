import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers.jsx';
import authReducer from './authReducer';
const rootReducer = combineReducers({
    cart: cartReducer,
    auth:authReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
