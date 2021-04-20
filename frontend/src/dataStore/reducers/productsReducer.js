import {LIST_PRODUCTS,LIST_PRODUCTS_CATEGORY} from '../constants/productsConstants'

export const productsReducer = (state={products:[]},action)=>{
    switch(action.type){
    case LIST_PRODUCTS :
        return{
            ...state,
        products:action.payload,
        }
    case LIST_PRODUCTS_CATEGORY :
        return{
            ...state,
            products:action.payload,
        }
    default : return state;
    }
}