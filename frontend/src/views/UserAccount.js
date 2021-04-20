import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {updateUser} from '../dataStore/actions/userActions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMineOrders} from '../dataStore/actions/orderActions'

const UserAccount = () => {
    const dispatch = useDispatch();
    let user = useSelector(state=>state.userInfo);




  const history = useHistory();
  const [userInfo,setUserInfo]=useState({
    _id:user.userInfo._id || '',
    name:user.userInfo.name || '' ,
    email:user.userInfo.email || '',
    password:user.userInfo.password || '',
    address:user.userInfo.address || '',
    city:user.userInfo.city || '',
    zipcode:user.userInfo.zipcode || '' ,
    country:user.userInfo.country || ''
})

 const token = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')).token:'';

  const headers= {
     "Content-Type":"application/json",
     authorization:`Bearer ${token}`
   }
  
  const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(updateUser({...userInfo,headers}));
    }

    useEffect(() => {
      if(!user.userInfo.email){
      history.push('/login')
      }
      }, [user])

      
    return (
        <div >
          
          <form className='form' onSubmit={onSubmit}>
          <h6> User Account</h6>
          <button ><Link to='/myorders' onClick={()=>dispatch(getMineOrders({email:user.userInfo.email,headers}))}>My Orders</Link></button> 
          {user.userInfo.isAdmin?(
            <button><Link to='/admin'>Admin Control</Link></button>
          ):(null)}
          <label htmlFor='email'>Full Name</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='name' type='text' required placeholder='Enter your Full Name' value={userInfo.name}/>

                <label htmlFor='email'>Email</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='email' type='email' required placeholder='Enter your Email' value={userInfo.email}/>

                <label htmlFor='password'>Password</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='password' type='password' required placeholder='Enter your Password' value={userInfo.password}/>


                <label htmlFor='address'>Address</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='address' type='text' required placeholder='Enter your Address' value={userInfo.address}/>

                <label htmlFor='address'>City</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='city' type='text' required placeholder='Enter your City' value={userInfo.city}/>

                <label htmlFor='address'>Zip-Code</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='zipcode' type='text' required placeholder='Enter your Zip-Code' value={userInfo.zipcode}/>

                <label htmlFor='country'>Country</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='country' type='text' required placeholder='Enter your Country' value={userInfo.country}/>
                
                <button type='submit'>Save</button>
          </form>
        </div>
    )
}

export default UserAccount
