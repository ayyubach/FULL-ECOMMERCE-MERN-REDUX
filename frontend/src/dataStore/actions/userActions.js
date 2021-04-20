import axios from 'axios';
import {LOGIN,UPDATE_USER,REGISTER_USER,LOGOUT_USER,GET_USERS} from '../constants/userConstants';

export const logIn =  (userEmail,userPassword)=>async (dispatch)=>{

    const userInfo = await axios.post('http://localhost:5000/user/getuser',{
        email:userEmail,
        password:userPassword
    })
    //console.log(userInfo.data)
    dispatch({type:LOGIN,payload:userInfo.data});
    localStorage.setItem('userInfo',JSON.stringify(userInfo.data));
}

export const updateUser = (user)=>async (dispatch)=>{
    
    const userInfo = await axios.put('http://localhost:5000/user/edituser',user);
    //console.log(userInfo)
    dispatch({type:UPDATE_USER,payload:userInfo.data.user});
    localStorage.setItem('userInfo',JSON.stringify(userInfo.data.user));

}

export const register = (user)=>async (dispatch)=>{
   
    const userInfo = await axios.post('http://localhost:5000/user/register',user);
    //console.log(userInfo.data)
    dispatch({type:REGISTER_USER,payload:userInfo.data});
    localStorage.setItem('userInfo',JSON.stringify(userInfo.data));

}

export const logOut = ()=>async (dispatch)=>{
   
    //console.log(userInfo.data)
    dispatch({type:LOGOUT_USER});
    localStorage.removeItem('userInfo');
    localStorage.removeItem('myOrders');

}


export const getUsers = (obj) => async (dispatch)=>{
const users = await axios.post('http://localhost:5000/user/listusers',obj);
dispatch({type:GET_USERS,payload:users.data});
localStorage.setItem('ListUsers',JSON.stringify(users.data));
}


export const removeUser = async (userEmail,headers)=>{
    //console.log(productName)
   const deletedProduct = await axios.post('http://localhost:5000/user/removeuser',{userEmail,headers});
}