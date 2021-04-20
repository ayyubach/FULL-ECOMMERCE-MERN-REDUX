import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {resetCartOrder} from '../dataStore/actions/orderActions'

const OrderThanks = () => {
    const dispatch = useDispatch();
 const order = useSelector(state => state.order);
const history = useHistory();

useEffect(() => {
if(!order.orderNumber){
    history.push('/checkout');
}
return () => {
    dispatch(resetCartOrder());
}
}, [order])
    return (
        <div style={{textAlign:'center',marginTop:'15px'}}>
           <h6>Thankyou for placing the order .</h6> 
           <h6>Order Number : {order.orderNumber} .</h6>
           <Link to='/'>click here to go Home</Link>
        </div>
    )
}

export default OrderThanks
