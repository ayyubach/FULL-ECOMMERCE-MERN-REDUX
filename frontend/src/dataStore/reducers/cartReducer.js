import {CART_ADD,CART_DELETE,RESET_CART} from '../constants/cartConstants';

export const cartReducer = (state={cartItems:[]},action)=>{

    switch(action.type){

    case CART_ADD :
       
        const existedItem = state.cartItems.find(p=>p._id===action.payload._id);
        
        if(existedItem){
         existedItem.quantity++;
            return{
                ...state,
                cartItems:state.cartItems.map(p=>p._id===existedItem._id?existedItem:p)

            }
        }else{
            return{
            ...state,
            cartItems:[...state.cartItems,action.payload]
        }
        }

    case CART_DELETE:
        return{
            ...state,
            cartItems:state.cartItems.filter(p=>p._id !== action.payload),
        }

        case RESET_CART:
            return{
                ...state,
                cartItems:[]
            }

    default : return state;
    }
}