import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {logIn} from '../dataStore/actions/userActions'
import {useDispatch,useSelector,connect} from 'react-redux'
import {useHistory} from 'react-router-dom'

const Login = ({toggleShowMenu}) => {

    const user = useSelector(state=>state.userInfo);

   //console.log(user.userInfo.email)
    const dispatch = useDispatch();
    const history = useHistory();
    const [userInfo,setUserInfo] = useState({
        email:'',
        password:''
    })

    const onSubmit = (e)=>{
        e.preventDefault();
        dispatch(logIn(userInfo.email,userInfo.password));
        
        }

        useEffect(() => {
            toggleShowMenu(false);
            if(user.userInfo.email){
             history.push('/account');
            }
    
        }, [user])

    return (
        <div>
            
            <form className='form' onSubmit={onSubmit}>
                <h6>Login</h6>
                <label htmlFor='email'>Email</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='email' type='email' required placeholder='Enter your Email' />

                <label htmlFor='password'>Password</label>
                <input onChange={(e)=>setUserInfo({...userInfo,[e.target.name]:e.target.value})} name='password' type='password' required placeholder='Enter your Password'/>
                
                <button type='submit'>Log in</button>
                <h6>You don't have account ? <Link to='/register'>Register Now</Link></h6>
            </form>
        </div>
    )
}



 export default Login

