import {createStore,applyMiddleware,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer';
import { orderReducer } from './reducers/orderReducer';
import {productsReducer} from './reducers/productsReducer'
import { userReducer } from './reducers/userReducer';

const initialState = {
cart:{
    cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
},

userInfo:{
    userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo'))[0]?JSON.parse(localStorage.getItem('userInfo'))[0]:JSON.parse(localStorage.getItem('userInfo')):{},
    listusers:localStorage.getItem('ListUsers')?JSON.parse(localStorage.getItem('ListUsers')):[]
    //listusers:[]
},
order:{
    myOrders:localStorage.getItem('myOrders')?JSON.parse(localStorage.getItem('myOrders')):[]
},



}

const reducers = combineReducers({
    products : productsReducer,
    cart:cartReducer,
    userInfo:userReducer,
    order:orderReducer
    })

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(reducers,initialState,composeEnhancer(applyMiddleware(thunk)));

export default Store ;