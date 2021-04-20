import {LOGIN, UPDATE_USER,REGISTER_USER,LOGOUT_USER,GET_USERS} from '../constants/userConstants'

export const userReducer = (state={userInfo:{},listusers:[]},action)=>{
switch(action.type){
case LOGIN :
    return{
        ...state,
    userInfo:action.payload
    }
case UPDATE_USER :

return{
    ...state,userInfo:action.payload
}

case REGISTER_USER :
    return{
        ...state,userInfo:action.payload
    }
case LOGOUT_USER :
    return{
        ...state,
        userInfo:{}
    }
case GET_USERS :
    return{
        ...state,

    }
default : return state;
}
}