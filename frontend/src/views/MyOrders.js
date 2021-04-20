import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

const MyOrders = () => {

    const history = useHistory();
    const user = useSelector(state=>state.userInfo);
    const orders = useSelector(state=>state.order);
    const orderProducts = orders.myOrders.map(p=>p.product.map(pr=>[pr.name,pr.price,pr.quantity]));
    const ord = orderProducts.map(p=>p.map(p2=>p2))
    
    useEffect(() => {
        if(!user.userInfo.email){
        history.push('/login')
        }
        }, [user])

        
    return (
        <div>
           <h6 style={{textAlign:'center',marginTop:'10px'}}> My Orders</h6>
           {orders.myOrders.length == 0 ? (<h6>You don't have any order yet !</h6>):(
            <div className='container'>
            {orderProducts.map(p=>(
            <div className='card-order'>
             {p.map(p2=>(
                 <>
                 <h6>Name : {p2[0]}</h6>
                 <h6>Price : {p2[1]}</h6>
                 <h6>Quantity : {p2[2]}</h6>
                 </>
             ))}
            </div>))}
            </div>   
           )}

         <button className='order-btn'><Link to='/'>Home</Link></button>
        </div>
    )
}

export default MyOrders
