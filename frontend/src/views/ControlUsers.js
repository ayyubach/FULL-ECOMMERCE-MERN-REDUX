import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {getUsers} from '../dataStore/actions/userActions'
import {removeUser} from '../dataStore/actions/userActions'

const ControlUsers = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state=>state.userInfo);
  const listusers = useSelector(state=>state.userInfo.listusers)

  const token = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')).token:'';

  const headers= {
     "Content-Type":"application/json",
     authorization:`Bearer ${token}`
   }

  //console.log(listusers)
  useEffect(() => {
    if(!user.userInfo.isAdmin){
      history.push('/account')
    }
   dispatch(getUsers({headers}))
  }, [])

    return (
        <div>
          <h6 style={{textAlign:'center'}}>Control Users </h6>
          {listusers.map(user=>(
            <div key={user._id} className='container' style={{marginTop:'10px'}}>

                          <h6>{user.name}</h6>
                          <h6>{user.email}</h6>
                          <button onClick={()=>removeUser(user.email,headers)} className='admin-btn'>Delete</button>
            </div>

          ))} 
        </div>
    )
}

export default ControlUsers
