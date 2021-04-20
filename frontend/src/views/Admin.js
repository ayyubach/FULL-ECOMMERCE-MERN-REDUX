import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Admin = () => {
 
    const history = useHistory();
    const user = useSelector(state=>state.userInfo);
    //console.log(user.userInfo.isAdmin)
    useEffect(() => {
    if(!user.userInfo.isAdmin){
    history.push('/account')
    }
    }, [])
    return (
        <div>
          <h6 style={{textAlign:'center',marginTop:'10px'}}>Admin Control</h6>
          <div className='admin-btns '>
          <button className='admin-btn'><Link to='/controlusers'>View Users</Link></button>
          <button className='admin-btn'><Link to='/controlproducts'>View Products</Link></button>
         </div>  
        </div>
    )
}

export default Admin
