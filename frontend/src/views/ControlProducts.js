import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {productsList} from '../dataStore/actions/productsActions'
import {Link} from 'react-router-dom'
import {removeProduct} from '../dataStore/actions/productsActions'

const ControlProducts = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state=>state.userInfo);
    const listProducts = useSelector(state=>state.products.products);


    const token = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')).token:'';

    const headers= {
       "Content-Type":"application/json",
       authorization:`Bearer ${token}`
     }
    //console.log(listProducts)
    useEffect(() => {
      if(!user.userInfo.isAdmin){
        history.push('/account')
      }
      dispatch(productsList());
    }, [])

    return (
      <>
        <h6 style={{textAlign:'center',marginTop:'10px'}}>Control Products </h6>
        <button className='order-btn'><Link to='/controladdproduct'>Add Product</Link></button>
        <div className='container'>

           {listProducts.map(p=>(
             <div className='card' key={p._id}>

             <img src={p.image} />
             <h6>{p.name}</h6>
             <h6>Price : $ {p.price}</h6>
             <h6>In Stock : {p.countInStock} items</h6> 
             <button onClick={()=>removeProduct(p.name,headers)}>Remove</button>
             </div>
           ))}
        </div>
        </>
    )
}

export default ControlProducts
