import React,{useEffect} from 'react'
import {cartDelete} from '../dataStore/actions/cartActions'
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'

const Cart = ({toggleShowMenu}) => {

    const dispatch = useDispatch();
    const cart =  useSelector(state => state.cart.cartItems);
    
    
    useEffect(() => {
        toggleShowMenu(false);

    }, [])
    return (
        <>
        <div className='container' >

         {cart.map(p=>(
             <div className='card' key={p._id}>

             <img src={p.image} />
             <h6>{p.name}</h6>
             <h6>Price : $ {p.price}</h6>
             <h6>Quantity : {p.quantity} </h6> 
             <button onClick={()=>dispatch(cartDelete(p._id))}>Remove</button>
             </div>

         ))}


        </div>
        <div className='container checkout'>
                <h6>Total Price : $ {cart.reduce((a,c)=>(a+c.price*c.quantity),0)} </h6>
                <button><Link to='/checkout' style={{ color:'#ffffff'}}>checkout</Link></button>
        </div>
        </>
    )
}

export default Cart
