import React,{useEffect} from 'react'
//import products from '../products'
import {useSelector,useDispatch} from 'react-redux';
import {addToCart} from '../dataStore/actions/cartActions'

const Products = ({showMenu,toggleShowMenu}) => {

    const dispatch = useDispatch();
    const products=  useSelector(state => state.products.products);
    useEffect(() => {
        toggleShowMenu(true);
    }, [showMenu])
             
    return (
        <div className='container'>

         {products.map(p=>(
             <div className='card' key={p._id}>

             <img src={p.image} />
             <h6>{p.name}</h6>
             <h6>Price : $ {p.price}</h6>
             <h6>In Stock : {p.countInStock} items</h6> 
             <button onClick={()=>dispatch(addToCart(p))}>Add To Cart</button>
             </div>

         ))}

 
        </div>
    )
}

export default Products
