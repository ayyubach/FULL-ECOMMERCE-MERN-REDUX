import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {placeOrder} from '../dataStore/actions/orderActions'

const Checkout = () => {

    const dispatch = useDispatch()
    const history = useHistory();
    const order = useSelector(state=>state.order);
    const cart =  useSelector(state => state.cart.cartItems);
    let user = useSelector(state=>state.userInfo);

    const token = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')).token:'';
    const headers= {
       "Content-Type":"application/json",
       authorization:`Bearer ${token}`
     }
    useEffect(() => {
        if(!user.userInfo.email){
            history.push('/')
            }

    }, [user])

useEffect(() => {
if(order.orderNumber){
    history.push('/orderthanks')
}
}, [order])
    return (
        <div>
            <h6 style={{textAlign:"center",marginTop:'8px'}}>Checkout</h6>
            {cart.length==0 && <h6>Your cart is empty</h6>}
            <div className='container'>
            <div className='orderITems'>
            {cart.map(p=>(
                <div>
                <h6>{p.name}</h6>
                <h6>Quantity : {p.quantity}</h6>
                </div>
            ))}
            </div>
            <div className='userInfo'>
            <h6>Address : {user.userInfo.address}</h6>
            <h6>ِCity : {user.userInfo.city}</h6>
            <h6>Zip Code : {user.userInfo.zipcode}</h6>
            <h6>Country : {user.userInfo.country}</h6>
            </div>
            </div>
            <div className='checkout-btns'>
            {cart.length!==0?(<button onClick={()=>dispatch(placeOrder({headers,...user.userInfo,_id:cart.map(p=>p._id)}))}className='checkout-btn'>Pay</button>):(null)}
            <button className='checkout-btn' ><Link to='/cart' style={{color:'#ffffff',textDecoration:'none'}}>Cart</Link></button>   
            </div>


        </div>
    )
}

export default Checkout
