import {ADD_ORDER, RESET_ORDER,GET_MY_ORDERS} from '../constants/orderConstants'
import axios from 'axios'
import { RESET_CART } from '../constants/cartConstants';




export const placeOrder = (order)=>async (dispatch)=>{
const orderCreated = await axios.post('http://localhost:5000/order/',order);
dispatch({type:ADD_ORDER,payload:orderCreated.data._id})


}

export const getMineOrders = (data)=>async (dispatch)=>{
const orders = await axios.post('http://localhost:5000/order/mine',data);
dispatch({type:GET_MY_ORDERS,payload:orders.data});
localStorage.setItem('myOrders',JSON.stringify(orders.data))
}

export const resetCartOrder = ()=>(dispatch)=>{

dispatch({type:RESET_ORDER});
dispatch({type:RESET_CART});
localStorage.removeItem('cartItems')
}