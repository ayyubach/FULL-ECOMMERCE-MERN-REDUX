import {ADD_ORDER,RESET_ORDER,GET_MY_ORDERS} from '../constants/orderConstants'

export const orderReducer = (state={orderNumber:'',myOrders:[]},action)=>{
        
switch(action.type){

    case ADD_ORDER : 
    return{
    ...state,
    orderNumber:action.payload
    
    }
    case RESET_ORDER:
        return{
            ...state,
            orderNumber:'',
        }
    case GET_MY_ORDERS :
        return{
        ...state,
        myOrders :action.payload
        }
    default : return state;

}
}