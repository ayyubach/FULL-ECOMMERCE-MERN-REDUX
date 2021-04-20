
import {CART_ADD,CART_DELETE} from '../constants/cartConstants';

export const addToCart = (product)=> (dispatch,getState)=>{

    dispatch({type:CART_ADD,payload:product});
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}

export const cartDelete = (productId)=>(dispatch,getState)=>{
    //console.log(productId)
    dispatch({type:CART_DELETE,payload:productId});
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}