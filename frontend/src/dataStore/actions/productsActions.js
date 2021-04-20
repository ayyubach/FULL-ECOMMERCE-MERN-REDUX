import axios from 'axios';
import {LIST_PRODUCTS,LIST_PRODUCTS_CATEGORY} from '../constants/productsConstants'



export const productsList = ()=>async (dispatch)=>{
try{
const data = await axios.get('http://localhost:5000/products/');
dispatch({type:LIST_PRODUCTS,payload:data.data});
}catch(err){

console.log(err);    
}
    
}

export const productsListCategory = (gender,category)=>async (dispatch)=>{
    try{
        const data = await axios.get(`http://localhost:5000/products/${gender}/${category}`);
        dispatch({type:LIST_PRODUCTS_CATEGORY,payload:data.data});
        }catch(err){
        
        console.log(err);    
        }
}

export const addProduct =  (product,headers)=>async (dispatch)=>{
   
    const newProduct = await axios.post('http://localhost:5000/products/addproduct',{product,headers});
    //console.log(userInfo.data)
    
}

export const removeProduct = async (productName,headers)=>{
     console.log(productName)
    const deletedProduct = await axios.post('http://localhost:5000/products/removeproduct',{productName,headers});
}